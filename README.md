# Modus Bootstrap

Modus Bootstrap is [Bootstrap v6](https://getbootstrap.com/) themed to the Trimble Modus design system. It gives you Bootstrap’s grid, components, and utilities with Modus colors, typography, spacing, and component styles.

[![npm version](https://img.shields.io/npm/v/modus-bootstrap?logo=npm&logoColor=fff)](https://www.npmjs.com/package/modus-bootstrap)
[![npm downloads](https://img.shields.io/npm/dm/modus-bootstrap?logo=npm&logoColor=fff)](https://www.npmjs.com/package/modus-bootstrap)
[![jsDelivr hits for the minified CSS](https://data.jsdelivr.com/v1/package/npm/modus-bootstrap/badge?style=rounded)](https://www.jsdelivr.com/package/npm/modus-bootstrap?path=dist/css)
[![Super-Linter](https://github.com/modus-bootstrap/modus-bootstrap/actions/workflows/super-linter.yml/badge.svg?branch=main)](https://github.com/modus-bootstrap/modus-bootstrap/actions/workflows/super-linter.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/modus-bootstrap/modus-bootstrap/badge)](https://scorecard.dev/viewer/?uri=github.com/modus-bootstrap/modus-bootstrap)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

> [!NOTE]
> Modus Bootstrap is in alpha. Expect breaking changes before the stable release.

## Quick start

- Install with npm: `npm install modus-bootstrap@6.0.0-alpha.1`
- Install with pnpm: `pnpm add modus-bootstrap@6.0.0-alpha.1`
- Install with Yarn: `yarn add modus-bootstrap@6.0.0-alpha.1`
- Install with Bun: `bun add modus-bootstrap@6.0.0-alpha.1`
- Clone the repo: `git clone https://github.com/modus-bootstrap/modus-bootstrap.git`

Or load the compiled CSS from the CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/modus-bootstrap@6.0.0-alpha.1/dist/css/modus-bootstrap.min.css" rel="stylesheet">
```

Read the [install guide](https://modus-bootstrap.com/getting-started/install/) for CDN, JavaScript, and Sass setup.

## What’s included

The npm package contains the CSS and the Sass source:

```text
modus-bootstrap/
├── dist/css/
│   ├── modus-bootstrap.css            # Full framework
│   ├── modus-bootstrap-grid.css       # Grid only
│   ├── modus-bootstrap-reboot.css     # Reboot only
│   ├── modus-bootstrap-utilities.css  # Utilities only
│   └── *.min.css, *.map               # Minified files and source maps
├── scss/                              # Sass source
└── .browserslistrc
```

Modus Bootstrap does not change Bootstrap’s JavaScript. Use the Bootstrap v6 JavaScript files with the Modus Bootstrap CSS. The install guide shows the CDN links. All CSS files support LTR and RTL layouts. Set `dir="rtl"` on the `<html>` element for RTL.

## Design rules

[DESIGN.md](DESIGN.md) lists the Modus visual rules: colors, typography, spacing, shapes, and components.

## Documentation

The docs are at <https://modus-bootstrap.com/>. The docs source is in `site/`. The site uses [Astro](https://astro.build/). [Pagefind](https://pagefind.app/) powers the search.

To run the docs locally:

1. Run `npm install` to install the dependencies.
2. Run `npm run dist` to build the CSS and JavaScript.
3. Run `npm start` to watch the source files and start the docs server.
4. Open <http://localhost:9001> in your browser.

## Bugs and feature requests

Search the [existing issues](https://github.com/modus-bootstrap/modus-bootstrap/issues) first. If your issue is new, [open an issue](https://github.com/modus-bootstrap/modus-bootstrap/issues/new/choose).

## Contributing

Read the [contributing guidelines](.github/CONTRIBUTING.md) before you open a pull request. If you change JavaScript, add [unit tests](js/tests). Run `npm test` to run the full test suite.

## Versioning

Modus Bootstrap follows [Semantic Versioning](https://semver.org/). Its version matches the Bootstrap version it is based on. See the [releases](https://github.com/modus-bootstrap/modus-bootstrap/releases) for the changelog of each version.

## Copyright and license

Modus Bootstrap is a fork of Bootstrap. Bootstrap code and documentation copyright 2011-2026 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors). Code released under the [MIT License](LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).
