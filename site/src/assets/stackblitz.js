// NOTICE: Drives the "Open in StackBlitz" button on docs examples; bundles
// `partials/snippets.js` as raw text into the generated playground.

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2024-2026 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

import sdk from '@stackblitz/sdk'
import snippetsContent from './partials/snippets.js?raw'

// These values will be replaced by Astro's Vite plugin
const CONFIG = {
  cssCdn: '__CSS_CDN__',
  jsBundleCdn: '__JS_BUNDLE_CDN__'
}

// Open in StackBlitz logic
export default () => {
  document.querySelectorAll('.btn-edit').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeSnippet = btn.closest('.bd-code-snippet')
      const exampleEl = codeSnippet?.querySelector('.bd-example')

      if (!exampleEl) {
        return
      }

      const htmlSnippet = exampleEl.innerHTML
      const addJs = btn.hasAttribute('data-sb-js-snippet')
      // Get extra classes for this example
      const classes = [...exampleEl.classList].join(' ')

      openBootstrapSnippet(htmlSnippet, addJs, classes)
    })
  })
}

// The Bootstrap JS bundle is an ES module, so the playground loads it with
// `type="module"`. The docs snippets import from `@bootstrap`; point that
// import at the CDN bundle and run the snippets once. StackBlitz does not run
// a separate module file in a static project, so the snippets go inline.
const getSnippetsScript = () => `<script type="module">
${snippetsContent
  .replace(/from '@bootstrap'/, `from '${CONFIG.jsBundleCdn}'`)
  .replace('export default () => {', 'const snippets = () => {')
  .trimEnd()
  .replace(/^(?=.)/gm, '  ')}

  snippets()
</script>`

const openBootstrapSnippet = (htmlSnippet, addJs, classes) => {
  const scriptTag = addJs ?
    getSnippetsScript() :
    `<script type="module" src="${CONFIG.jsBundleCdn}"></script>`

  const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link href="${CONFIG.cssCdn}" rel="stylesheet">
    <title>Modus Bootstrap Example</title>
  </head>
  <body class="p-3 m-0 border-0 ${classes}">
    <!-- Example Code Start-->
${htmlSnippet.trimStart().replace(/^/gm, '    ').replace(/^ {4}$/gm, '').trimEnd()}
    <!-- Example Code End -->
${scriptTag.replace(/^(?=.)/gm, '    ')}
  </body>
</html>
`

  const project = {
    files: {
      'index.html': indexHtml
    },
    title: 'Modus Bootstrap Example',
    description: `Example from ${window.location.href}`,
    template: 'html',
    tags: ['modus-bootstrap', 'bootstrap']
  }

  sdk.openProject(project, { openFile: 'index.html' })
}
