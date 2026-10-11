# Accessibility

Modus Bootstrap aims to help you build websites and applications that everyone can use.

## Our goal

We target [WCAG 2.2](https://www.w3.org/TR/WCAG/) Level AA for the framework and its documentation site.

Modus Bootstrap has not had a formal accessibility audit. We do not claim conformance with WCAG, Section 508, or other standards.

## What the framework gives you

- Interactive components (such as modals, dropdowns, and tooltips) work with touch, mouse, and keyboard.
- Components use [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) roles and attributes for assistive technologies.
- The `.visually-hidden` and `.visually-hidden-focusable` classes hide content visually but keep it available to screen readers.
- Most transitions and animations respect the `prefers-reduced-motion` media feature.

## Known limitations

- The accessibility of your project depends on your markup, styles, and scripts. Modus Bootstrap cannot make inaccessible markup accessible.
- Some generic components need extra ARIA attributes or JavaScript from you. The documentation tells you when.
- Some default color combinations do not meet the WCAG contrast ratios of 4.5:1 for text and 3:1 for non-text content. Test your color choices.

For more detail, read the [accessibility documentation](https://modus-bootstrap.com/getting-started/accessibility/).

## Report an issue

If you find an accessibility problem in the framework or the docs, [open an issue](https://github.com/modus-bootstrap/modus-bootstrap/issues/new/choose).

Tell us:

- The page or component
- What you expected and what happened
- Your browser, operating system, and assistive technology (with versions)
- Steps or a test case that shows the problem
