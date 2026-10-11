import fs from 'node:fs'
import path from 'node:path'
import { getConfig } from './config'
import { fileURLToPath } from 'node:url'

// The docs directory path relative to the root of the project.
export const docsDirectory = getConfig().docsDir

// A list of all the docs paths that were generated during a build.
const generatedDocsPaths: string[] = []

export function getDocsPath(docsPath: string): string {
  const sanitizedDocsPath = docsPath.replace(/^\//, '')

  if (import.meta.env.PROD) {
    generatedDocsPaths.push(sanitizedDocsPath)
  }

  return `/${sanitizedDocsPath}`
}

// Validate that all the generated docs paths point to an existing page or asset.
// This is useful to catch typos in docs paths.
// Note: this function is only called during a production build.
// Note: this could at some point be refactored to use Astro list of generated `routes` accessible in the
// `astro:build:done` integration hook. Although as of 03/14/2023, this is not possible due to the route's data only
// containing information regarding the last page generated page for dynamic routes.
// @see https://github.com/withastro/astro/issues/5802
export function validateDocsPaths(distUrl: URL) {
  for (const docsPath of generatedDocsPaths) {
    const sanitizedDocsPath = sanitizeDocsPathForValidation(docsPath)
    const absoluteDocsPath = fileURLToPath(new URL(path.join('.', sanitizedDocsPath), distUrl))

    const docsPathExists = fs.existsSync(absoluteDocsPath)

    if (!docsPathExists) {
      throw new Error(`A docs path was generated but does not point to a valid page or asset: '${docsPath}'.`)
    }
  }
}

export function getDocsRelativePath(docsPath: string) {
  return path.join(docsDirectory, docsPath)
}

export function getDocsStaticFsPath() {
  return path.join(getDocsFsPath(), 'static')
}

export function getDocsPublicFsPath() {
  return path.join(getDocsFsPath(), 'public')
}

export function getDocsFsPath() {
  return path.join(process.cwd(), docsDirectory)
}

function sanitizeDocsPathForValidation(docsPath: string) {
  // Remove the hash part of the path if any.
  let sanitizedDocsPath = docsPath.split('#')[0]

  // Append the `index.html` part if the path doesn't have an extension.
  if (!sanitizedDocsPath.includes('.')) {
    sanitizedDocsPath = path.join(sanitizedDocsPath, 'index.html')
  }

  return sanitizedDocsPath
}
