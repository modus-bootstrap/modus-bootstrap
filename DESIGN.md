---
version: alpha
name: Modus Bootstrap
description: Bootstrap v6 themed to the Trimble Modus design system.
colors:
  primary: "#0063a3"
  primary-light: "#217cbb"
  primary-pale: "#dcedf9"
  primary-dark: "#004f83"
  success: "#1e8a44"
  success-dark: "#006638"
  danger: "#da212c"
  warning: "#e49325"
  warning-border: "#f08c00"
  neutral: "#6a6e79"
  neutral-light: "#90939f"
  neutral-dark: "#464b52"
  surface: "#ffffff"
  on-surface: "#252a2e"
  on-primary: "#ffffff"
typography:
  headline-lg:
    fontFamily: Open Sans
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.33
  headline-md:
    fontFamily: Open Sans
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.43
  body-lg:
    fontFamily: Open Sans
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: Open Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Open Sans
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Open Sans
    fontSize: 1rem
    fontWeight: 600
    lineHeight: 1.5
  label-sm:
    fontFamily: Open Sans
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.25
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 10px
  xl: 12px
  2xl: 16px
  full: 50rem
spacing:
  "1": 0.25rem
  "2": 0.375rem
  "3": 0.5rem
  "4": 0.75rem
  "5": 1rem
  "6": 1.25rem
  "7": 1.5rem
  "9": 2rem
  "12": 3rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 0.375rem 0.75rem
    height: 2.375rem
  button-success:
    backgroundColor: "{colors.success-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
  button-danger:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 0.375rem 0.75rem
    height: 2.375rem
  alert-primary:
    backgroundColor: "{colors.primary-pale}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: 1rem
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.xl}"
---

# Modus Bootstrap

This file describes the visual rules of Modus Bootstrap. Humans and AI agents can read it. It follows the [DESIGN.md format](https://github.com/google-labs-code/design.md).

The Sass source is the source of truth. If this file and the Sass differ, the Sass wins. Update this file when you change a design token.

## Overview

Modus Bootstrap is Bootstrap v6 with the Trimble Modus look. The style is clean, calm, and functional. It serves data-heavy business applications.

- Use one strong brand color: Trimble Blue.
- Keep surfaces flat and light. Use borders before shadows.
- Use color for meaning: status, action, and focus. Do not use color for decoration.
- Support light and dark mode with `data-bs-theme="light"` or `data-bs-theme="dark"`.

Modus changes are layered on top of the Bootstrap defaults. They live in `scss/_root-modus.scss`.

## Colors

The palette uses the Trimble Modus brand colors. The Modus name of each color is in brackets. The names match the `--modus-wc-color-*` tokens in Modus Web Components. Each theme color also has a generated scale from `025` to `975` in `scss/_colors.scss`.

- **Primary (#0063a3) [Trimble Blue]:** Use it for primary actions, links, checked controls, and switches.
- **Primary light (#217cbb) [Blue Light]:** The `--bs-blue-500` value inside `.theme-primary`.
- **Primary pale (#dcedf9) [Blue Pale]:** Subtle backgrounds, such as the light-mode primary alert and info themes.
- **Primary dark (#004f83) [Info Blue]:** The info theme border.
- **Success (#1e8a44) [Green] and success dark (#006638) [Green Dark]:** Positive status. Use the dark value for filled backgrounds and borders.
- **Danger (#da212c) [Red]:** Errors and destructive actions.
- **Warning (#e49325) [Yellow Dark]:** Caution. Use dark text on warning backgrounds. The warning border uses #f08c00. That value is not a Modus color.
- **Neutral (#6a6e79) [Gray 6]:** Default border color for controls.
- **Neutral light (#90939f) [Gray 4]:** Form control, check, and radio borders in light mode.
- **Neutral dark (#464b52) [Gray 8]:** Form control and check borders in dark mode.
- **Surface (#ffffff) [White] and on-surface (#252a2e) [Trimble Gray]:** Page background and body text in light mode. The framework sets body text with `--bs-fg-body`.

Use the semantic theme classes, such as `.theme-primary` and `.theme-danger`. Do not hard-code hex values in components. Use the CSS custom properties, such as `--bs-primary-bg`.

## Typography

The Modus brand font is Open Sans. Modus Web Components uses the stack `"Open Sans", "Segoe UI", "Noto Sans", "San Francisco", Helvetica, Arial, sans-serif`. The docs site loads Open Sans in weights 300, 400, 600, and 700. The framework CSS uses the native system font stack (`--bs-body-font-family`). Set Open Sans on that token when your product loads the font.

- Body text is 1rem with a 1.5 line height.
- Buttons and form labels use weight 600 (semibold).
- Headings use weight 600. Do not use weight 800 or higher.
- Use the `$font-sizes` scale (`xs` to `6xl`) in `scss/_config.scss`. Sizes from `lg` up are fluid and use `clamp()`.
- Use `.text-balance` on headings and `.text-pretty` on long paragraphs.

## Layout

Spacing uses a 1rem base (`$spacer`). The `$spacers` scale goes from step 1 (0.25rem) to step 12 (3rem).

- Use the spacing utilities, such as `.p-5` and `.gap-3`. Do not use arbitrary pixel values.
- Use the grid and breakpoints from `scss/_config.scss`. Breakpoints start at `sm` (576px).
- Use logical properties, such as `padding-inline-start`, so layouts work in right-to-left languages.
- Buttons and inputs share one height: 2.375rem by default, 2rem small, and 2.75rem large.

## Elevation & Depth

Modus is mostly flat.

- Separate content with borders and background steps (`--bs-bg-1` to `--bs-bg-4`) first.
- Use shadows only for floating layers: menus, popovers, tooltips, toasts, dialogs, and drawers.
- Use the shadow tokens `--bs-box-shadow-xs` to `--bs-box-shadow-xl`. Dark mode increases `--bs-shadow-strength` automatically.
- Use the z-index scale in `$zindex-levels`. Do not invent z-index values.

## Shapes

Corners are slightly rounded.

- Buttons and inputs use `--bs-radius-5` (8px).
- Alerts use `--bs-radius-6` (10px).
- Cards and badges use `--bs-radius-7` (12px).
- Date picker days, avatars, and similar round items use `50%`.
- Pills use `--bs-radius-pill`.
- In Sass, use the `border-radius` mixins. Do not write a raw `border-radius` property.

## Components

The YAML front matter lists the main component tokens. Component styles live in `scss/`. Each component reads its values from CSS custom properties on its root selector, such as `--bs-btn-padding-x`.

- **Buttons:** Semibold label, 8px radius, filled theme colors. Primary is Trimble Blue with white text.
- **Inputs, selects, checks, and radios:** White background, neutral border, 8px radius. Checked state uses Trimble Blue.
- **Switch:** The checked track uses Trimble Blue (#0063a3).
- **Alerts:** Pale tinted background, theme-colored border, 10px radius.
- **Cards:** White surface, subtle border, 12px radius.
- **Badges:** Small semibold text, 12px radius.

To change a component, override its custom properties. Do not add new selectors to restyle it.

## Do's and Don'ts

- Do use the theme classes and CSS custom properties for color.
- Do check contrast. Text must meet WCAG AA (4.5:1). Use dark text on warning and info backgrounds.
- Do test every change in light mode and dark mode.
- Do keep one primary action in each view.
- Don't hard-code hex colors, pixel spacing, or radius values in components.
- Don't use `lighten()` or `darken()`. Use `color-mix()` and `light-dark()`.
- Don't remove focus outlines. Use the theme `focus-ring` tokens.
- Don't use shadows to separate static content.
- Don't use more than one brand accent color in a view.
