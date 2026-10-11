import type { HTMLAttributes } from 'astro/types'
import { getConfig } from '@libs/config'
import { getDocsPath } from '@libs/path'

export function getVersionedBsCssProps() {
  let bsCssLinkHref = '/dist/css/modus-bootstrap'

  if (import.meta.env.PROD) {
    bsCssLinkHref = `${bsCssLinkHref}.min`
  }

  bsCssLinkHref = `${bsCssLinkHref}.css`

  const bsCssLinkProps: HTMLAttributes<'link'> = {
    href: getDocsPath(bsCssLinkHref),
    rel: 'stylesheet'
  }

  return bsCssLinkProps
}

export function getVersionedBsJsProps() {
  // Load Bootstrap's JS from the upstream `bootstrap` package on jsDelivr.
  const bsJsLinkProps: HTMLAttributes<'script'> = {
    type: 'module',
    src: getConfig().cdn.js_bundle
  }

  return bsJsLinkProps
}
