# Modus Bootstrap

## Bootstrap 6

Our default branch is for development of our Bootstrap 6 release. Head to the [`v5-dev` branch](https://github.com/twbs/bootstrap/tree/v5-dev) to view the readme, documentation, and source code for Bootstrap 5.

## Quick start

Several quick start options are available:

- [Download the latest source](https://github.com/modus-bootstrap/modus-bootstrap/archive/refs/heads/main.zip)
- Clone the repo: `git clone https://github.com/modus-bootstrap/modus-bootstrap.git`
- Install with [npm](https://www.npmjs.com/): `npm install modus-bootstrap@6.0.0-alpha.1`
- Install with [yarn](https://yarnpkg.com/): `yarn add modus-bootstrap@6.0.0-alpha.1`
- Install with [Bun](https://bun.sh/): `bun add modus-bootstrap@6.0.0-alpha.1`

Read the [Getting started page](https://modus-bootstrap.com/getting-started/introduction/) for information on the framework contents, templates, examples, and more.

## Status

[![npm version](https://img.shields.io/npm/v/modus-bootstrap?logo=npm&logoColor=fff)](https://www.npmjs.com/package/modus-bootstrap)
[![CSS gzip size](https://img.badgesize.io/modus-bootstrap/modus-bootstrap/main/dist/css/modus-bootstrap.min.css?compression=gzip&label=CSS%20gzip%20size)](https://github.com/modus-bootstrap/modus-bootstrap/blob/main/dist/css/modus-bootstrap.min.css)
[![CSS Brotli size](https://img.badgesize.io/modus-bootstrap/modus-bootstrap/main/dist/css/modus-bootstrap.min.css?compression=brotli&label=CSS%20Brotli%20size)](https://github.com/modus-bootstrap/modus-bootstrap/blob/main/dist/css/modus-bootstrap.min.css)
![Open Source Security Foundation Scorecard](https://img.shields.io/ossf-scorecard/github.com/modus-bootstrap/modus-bootstrap)

## What’s included

Within the download you’ll find the following directories and files, logically grouping common assets and providing both compiled and minified variations.

<details>
  <summary>Download contents</summary>

  ```text
  bootstrap/
  ├── css/
  │   ├── modus-bootstrap-grid.css
  │   ├── modus-bootstrap-grid.css.map
  │   ├── modus-bootstrap-grid.min.css
  │   ├── modus-bootstrap-grid.min.css.map
  │   ├── modus-bootstrap-reboot.css
  │   ├── modus-bootstrap-reboot.css.map
  │   ├── modus-bootstrap-reboot.min.css
  │   ├── modus-bootstrap-reboot.min.css.map
  │   ├── modus-bootstrap-utilities.css
  │   ├── modus-bootstrap-utilities.css.map
  │   ├── modus-bootstrap-utilities.min.css
  │   ├── modus-bootstrap-utilities.min.css.map
  │   ├── modus-bootstrap.css
  │   ├── modus-bootstrap.css.map
  │   ├── modus-bootstrap.min.css
  │   └── modus-bootstrap.min.css.map
  └── js/
      ├── bootstrap.bundle.js
      ├── bootstrap.bundle.js.map
      ├── bootstrap.bundle.min.js
      ├── bootstrap.bundle.min.js.map
      ├── bootstrap.js
      ├── bootstrap.js.map
      ├── bootstrap.min.js
      └── bootstrap.min.js.map
  ```
</details>

We provide compiled CSS and JS (`bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*`). [Source maps](https://web.dev/articles/source-maps) (`bootstrap.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`bootstrap.bundle.js` and minified `bootstrap.bundle.min.js`) include [Floating UI](https://floating-ui.com/) and [Vanilla Calendar Pro](https://vanilla-calendar.pro/). All CSS files work for both LTR and RTL layouts thanks to logical properties—simply set `dir="rtl"` on your HTML element.

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/modus-bootstrap/modus-bootstrap/blob/main/.github/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/modus-bootstrap/modus-bootstrap/issues/new/choose).

## Documentation

Bootstrap’s documentation, included in this repo in the root directory, is built with [Astro](https://astro.build/) and publicly hosted at <https://modus-bootstrap.com/>. The docs may also be run locally.

Documentation search is powered by [Pagefind](https://pagefind.app/).

### Running documentation locally

1. Run `npm install` to install the Node.js dependencies, including Astro (the site builder).
2. Run `npm run test` (or a specific npm script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
3. From the root `/modus-bootstrap` directory, run `npm run docs-serve` in the command line.
4. Open <http://localhost:9001> in your browser, and voilà.

Learn more about using Astro by reading its [documentation](https://docs.astro.build/en/getting-started/).

### Documentation for previous releases

You can find all our previous releases docs on <https://getbootstrap.com/docs/versions/>.

[Previous releases](https://github.com/modus-bootstrap/modus-bootstrap/releases) and their documentation are also available for download.

## Contributing

Please read through our [contributing guidelines](https://github.com/modus-bootstrap/modus-bootstrap/blob/main/.github/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/modus-bootstrap/modus-bootstrap/tree/main/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/modus-bootstrap/modus-bootstrap/blob/main/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Bootstrap is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/modus-bootstrap/modus-bootstrap/releases) for changelogs for each release version of Bootstrap.

## Thanks

<a href="https://www.browserstack.com/">
  <img src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" alt="BrowserStack" width="192" height="42">
</a>

Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!

<a href="https://www.netlify.com/">
  <img src="https://www.netlify.com/v3/img/components/full-logo-light.svg" alt="Netlify" width="147" height="40">
</a>

Thanks to [Netlify](https://www.netlify.com/) for providing us with Deploy Previews!

## Copyright and license

Code and documentation copyright 2011-2026 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors). Code released under the [MIT License](https://github.com/modus-bootstrap/modus-bootstrap/blob/main/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).
