#!/usr/bin/env node

/*!
 * Script to generate SRI hashes for use in our docs.
 * The docs load Bootstrap's JS from the upstream `bootstrap` package on
 * jsDelivr, so we hash the files at the CDN URLs in `config.yml`.
 *
 * Copyright 2017-2026 The Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const configFile = path.join(__dirname, '../config.yml')

// Array of objects which holds the files to generate SRI hashes for.
// `urlPropertyName` is the config.yml variable's name of the CDN URL
// `configPropertyName` is the config.yml variable's name of the hash
const files = [
  {
    urlPropertyName: 'js',
    configPropertyName: 'js_hash'
  },
  {
    urlPropertyName: 'js_bundle',
    configPropertyName: 'js_bundle_hash'
  }
]

let config = await fs.readFile(configFile, 'utf8')

const getUrl = propertyName => {
  const url = config.match(new RegExp(`^\\s+${propertyName}:\\s+["'](\\S+)["']`, 'm'))?.[1]

  if (!url) {
    throw new Error(`Missing \`${propertyName}\` in config.yml`)
  }

  return url
}

const getIntegrity = async url => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`)
  }

  const data = Buffer.from(await response.arrayBuffer())
  const algorithm = 'sha384'
  const hash = crypto.createHash(algorithm).update(data).digest('base64')

  return `${algorithm}-${hash}`
}

const integrities = await Promise.all(files.map(({ urlPropertyName }) => getIntegrity(getUrl(urlPropertyName))))

for (const [index, { configPropertyName }] of files.entries()) {
  const integrity = integrities[index]

  console.log(`${configPropertyName}: ${integrity}`)

  config = config.replace(new RegExp(`^(\\s+${configPropertyName}:\\s+["'])\\S*(["'])`, 'm'), `$1${integrity}$2`)
}

await fs.writeFile(configFile, config)
