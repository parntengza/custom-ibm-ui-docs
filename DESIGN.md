---
version: alpha
name: kanok-ui
description: "Carbon Design System (IBM's product design language) as components: square corners, IBM Plex Sans, layers of grey surfaces instead of shadows, one blue accent, four themes (white, g10, g90, g100) and productive motion. Package @purpurabog/ui 0.87.0; every value below is a --ui-* CSS custom property in tokens.css."
colors:
  primary: "#0f62fe"
  on-primary: "#ffffff"
  canvas: "#ffffff"
  ink: "#161616"
  ink-muted: "#525252"
  ink-helper: "#6f6f6f"
  ink-placeholder: "#6f6f6f"
  layer-1: "#f4f4f4"
  layer-2: "#ffffff"
  layer-3: "#f4f4f4"
  field-1: "#f4f4f4"
  field-2: "#ffffff"
  border-subtle-1: "#e0e0e0"
  border-strong-1: "#8d8d8d"
  interactive: "#0f62fe"
  focus: "#0f62fe"
  link: "#0f62fe"
  link-hover: "#0043ce"
  secondary: "#393939"
  button-danger: "#da1e28"
  success: "#24a148"
  warning: "#f1c21b"
  error: "#da1e28"
  info: "#0043ce"
  highlight: "#d0e2ff"
  overlay: "rgba(0, 0, 0, 0.6)"
  skeleton-background: "#e8e8e8"
typography:
  heading-07:
    fontFamily: "IBM Plex Sans"
    fontSize: "54px"
    fontWeight: 300
    lineHeight: "1.19"
  heading-06:
    fontFamily: "IBM Plex Sans"
    fontSize: "42px"
    fontWeight: 300
    lineHeight: "1.199"
  heading-05:
    fontFamily: "IBM Plex Sans"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: "1.25"
  heading-04:
    fontFamily: "IBM Plex Sans"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: "1.28572"
  heading-03:
    fontFamily: "IBM Plex Sans"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1.4"
  heading-02:
    fontFamily: "IBM Plex Sans"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "1.5"
  heading-01:
    fontFamily: "IBM Plex Sans"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "1.42857"
  body-lg:
    fontFamily: "IBM Plex Sans"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0.16px"
  body:
    fontFamily: "IBM Plex Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0.16px"
  body-01:
    fontFamily: "IBM Plex Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.42857"
    letterSpacing: "0.16px"
  body-sm:
    fontFamily: "IBM Plex Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.29"
    letterSpacing: "0.16px"
  body-emphasis:
    fontFamily: "IBM Plex Sans"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "1.29"
    letterSpacing: "0.16px"
  caption:
    fontFamily: "IBM Plex Sans"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.33"
    letterSpacing: "0.32px"
  button:
    fontFamily: "IBM Plex Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.29"
  code:
    fontFamily: "IBM Plex Mono"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "0.32px"
  code-lg:
    fontFamily: "IBM Plex Mono"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
rounded:
  none: "0px"
  xs: "2px"
  sm: "4px"
  pill: "9999px"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 63px 0 15px"
    typography: "{typography.button}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    height: "48px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    border: "1px solid {colors.primary}"
    rounded: "{rounded.none}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.link}"
    rounded: "{rounded.none}"
  button-danger:
    backgroundColor: "{colors.button-danger}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  text-input:
    backgroundColor: "{colors.field-1}"
    textColor: "{colors.ink}"
    borderBottom: "1px solid {colors.border-strong-1}"
    height: "40px"
    rounded: "{rounded.none}"
    focus: "2px solid {colors.focus} inset"
  tile:
    backgroundColor: "{colors.layer-1}"
    padding: "{spacing.md}"
    rounded: "{rounded.none}"
---

# kanok-ui design

This file describes the design of the kanok-ui components (npm `@purpurabog/ui` 0.87.0) for people and AI tools building screens with them. It is generated from `tokens.css`, so the values match the package. The components already apply all of it: build screens from the components and the `--ui-*` tokens, and the result follows the system. Docs: https://parntengza.github.io/kanok-ui-docs/ (index for AI tools: https://parntengza.github.io/kanok-ui-docs/llms.txt).

## Overview

kanok-ui follows the Carbon Design System (IBM's open-source product design language) for product screens: forms, tables, overlays and the app shell, in Thai and English. Surfaces are flat and square. Depth comes from layers of grey, not shadows. One blue carries the primary action, links and focus. Type is IBM Plex Sans (with IBM Plex Sans Thai) in Carbon's productive scale. Motion is short and functional.

## Colors

Colors come from Carbon's four themes, set with `data-theme="white|g10|g90|g100|auto"` on `<html>` or on any element (a zone). Always use the token, never the hex value, so a zone or a dark theme keeps working.

| Token | white | g10 | g90 | g100 | Use |
|---|---|---|---|---|---|
| `--ui-primary` | `#0f62fe` | `#0f62fe` | `#0f62fe` | `#0f62fe` | primary button, the one accent |
| `--ui-on-primary` | `#ffffff` | `#ffffff` | `#ffffff` | `#ffffff` | text and icons on primary / coloured fills |
| `--ui-canvas` | `#ffffff` | `#f4f4f4` | `#262626` | `#161616` | page background |
| `--ui-ink` | `#161616` | `#161616` | `#f4f4f4` | `#f4f4f4` | primary text |
| `--ui-ink-muted` | `#525252` | `#525252` | `#c6c6c6` | `#c6c6c6` | secondary text, labels |
| `--ui-ink-helper` | `#6f6f6f` | `#6f6f6f` | `#c6c6c6` | `#a8a8a8` | helper text |
| `--ui-ink-placeholder` | `#6f6f6f` | `#6f6f6f` | `#c6c6c6` | `#a8a8a8` | placeholders |
| `--ui-layer-1` | `#f4f4f4` | `#ffffff` | `#393939` | `#262626` | surface on the canvas (tiles, menus); fields on it use field-2 |
| `--ui-layer-2` | `#ffffff` | `#f4f4f4` | `#525252` | `#393939` | surface on layer-1 |
| `--ui-layer-3` | `#f4f4f4` | `#ffffff` | `#6f6f6f` | `#525252` | surface on layer-2 |
| `--ui-field-1` | `#f4f4f4` | `#ffffff` | `#393939` | `#262626` | field background on the canvas |
| `--ui-field-2` | `#ffffff` | `#f4f4f4` | `#525252` | `#393939` | field background on layer-1 |
| `--ui-border-subtle-1` | `#e0e0e0` | `#c6c6c6` | `#525252` | `#393939` | dividers on layer-1 |
| `--ui-border-strong-1` | `#8d8d8d` | `#8d8d8d` | `#8d8d8d` | `#6f6f6f` | field bottom border |
| `--ui-interactive` | `#0f62fe` | `#0f62fe` | `#4589ff` | `#4589ff` | selected / active indicators |
| `--ui-focus` | `#0f62fe` | `#0f62fe` | `#ffffff` | `#ffffff` | 2px focus outline |
| `--ui-link` | `#0f62fe` | `#0f62fe` | `#78a9ff` | `#78a9ff` | links |
| `--ui-link-hover` | `#0043ce` | `#0043ce` | `#a6c8ff` | `#a6c8ff` | links on hover |
| `--ui-secondary` | `#393939` | `#393939` | `#6f6f6f` | `#6f6f6f` | secondary button |
| `--ui-button-danger` | `#da1e28` | `#da1e28` | `#da1e28` | `#da1e28` | danger button |
| `--ui-success` | `#24a148` | `#24a148` | `#42be65` | `#42be65` | success status |
| `--ui-warning` | `#f1c21b` | `#f1c21b` | `#f1c21b` | `#f1c21b` | warning status |
| `--ui-error` | `#da1e28` | `#da1e28` | `#ff8389` | `#fa4d56` | error status and invalid fields |
| `--ui-info` | `#0043ce` | `#0043ce` | `#4589ff` | `#4589ff` | informational status |
| `--ui-highlight` | `#d0e2ff` | `#d0e2ff` | `#002d9c` | `#001d6c` | selected text background |
| `--ui-overlay` | `rgba(0, 0, 0, 0.6)` | `rgba(0, 0, 0, 0.6)` | `rgba(0, 0, 0, 0.6)` | `rgba(0, 0, 0, 0.6)` | behind modals and side panels |
| `--ui-skeleton-background` | `#e8e8e8` | `#e8e8e8` | `#333333` | `#292929` | loading skeletons |

Every other color (tags, status, notifications, icons, hover and active states) is in `tokens.css` with its Carbon name.

## Typography

`--ui-font-family` is IBM Plex Sans, then IBM Plex Sans Thai, Helvetica Neue and Arial; code uses IBM Plex Mono. Load the fonts yourself (the package doesn't ship font files). Each style is a `font` shorthand token; pair it with its tracking token.

| Token | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| `--ui-font-heading-07` | 54px | 300 | 1.19 | 0 |
| `--ui-font-heading-06` | 42px | 300 | 1.199 | 0 |
| `--ui-font-heading-05` | 32px | 400 | 1.25 | 0 |
| `--ui-font-heading-04` | 28px | 400 | 1.28572 | 0 |
| `--ui-font-heading-03` | 20px | 400 | 1.4 | 0 |
| `--ui-font-heading-02` | 16px | 600 | 1.5 | 0 |
| `--ui-font-heading-01` | 14px | 600 | 1.42857 | 0 |
| `--ui-font-body-lg` | 18px | 400 | 1.5 | 0.16px |
| `--ui-font-body` | 16px | 400 | 1.5 | 0.16px |
| `--ui-font-body-01` | 14px | 400 | 1.42857 | 0.16px |
| `--ui-font-body-sm` | 14px | 400 | 1.29 | 0.16px |
| `--ui-font-body-emphasis` | 14px | 600 | 1.29 | 0.16px |
| `--ui-font-caption` | 12px | 400 | 1.33 | 0.32px |
| `--ui-font-button` | 14px | 400 | 1.29 | 0 |
| `--ui-font-code` | 12px | 400 | 16px | 0.32px |
| `--ui-font-code-lg` | 14px | 400 | 20px | 0 |

Headings in pages: use `<ui-heading>` inside `<ui-section>`; nesting picks the level, h1 (heading-06, 42px light) down to h6 (heading-01, 14px).

## Layout

- **Spacing** is a 4px grid: `--ui-space-xxs` 4px, `--ui-space-xs` 8px, `--ui-space-sm` 12px, `--ui-space-md` 16px, `--ui-space-lg` 24px, `--ui-space-xl` 32px, `--ui-space-xxl` 48px, `--ui-space-section` 96px.
- **Grid**: Carbon's 2x grid, `<ui-grid>` / `<ui-column>` (React + Tailwind `Grid` / `Column`): 4 columns from 0, 8 from 672px (md), 16 from 1056px (lg), 1312px (xlg) and 1584px (max), 32px gutters.
- **Sizes**: fields are 40px (md) by default, 32px (sm) or 48px (lg); buttons are 48px (lg) by default. `--ui-field-height-sm|md|lg` resizes every field in a zone.

## Elevation & Depth

No drop shadows on surfaces. Put a surface on a surface with `<ui-layer>` (React + Tailwind `Layer`): each level moves backgrounds, fields and borders one step (`layer-1` → `layer-2` → `layer-3`), so a field on a tile is always visible. Only floating things (menus, popovers, tooltips) cast a small shadow; modals, tearsheets and side panels dim the page behind them.

## Shapes

Corners are square: `--ui-radius-none` 0px, `--ui-radius-xs` 2px, `--ui-radius-sm` 4px, `--ui-radius-pill` 9999px. Only tags (16px), radio buttons, avatars and toggles are round. Don't round buttons, fields, tiles or modals.

## Motion

Carbon productive motion: `--ui-duration-fast` 70ms, `--ui-duration-moderate` 110ms, `--ui-duration-moderate-01` 150ms, `--ui-duration-moderate-02` 240ms; `--ui-easing` `cubic-bezier(0.2, 0, 0.38, 0.9)`, `--ui-easing-entrance` `cubic-bezier(0, 0, 0.38, 0.9)`, `--ui-easing-exit` `cubic-bezier(0.2, 0, 1, 0.9)`. Each component's animation copies its own Carbon CSS. Under `prefers-reduced-motion` every duration is 0ms, so nothing moves.

## Components

Use a component instead of building the control: `<ui-button>`, `<ui-text-input>`, `<ui-select>`, `<ui-dropdown>`, `<ui-combobox>`, `<ui-date-picker>`, `<ui-data-table>`, `<ui-modal>`, `<ui-side-panel>`, `<ui-notification>`, `<ui-tabs>`, `<ui-tile>`, `<ui-header>` / `<ui-side-nav>` and the rest (React: `UiButton` … from `@purpurabog/ui/react`; React + Tailwind: `Button` … copied with `npx shadcn@4 add @kanok-ui/tw-button`). The front matter above shows the main button, field and tile values; each component's page lists its attributes, events, slots and parts.

- **Buttons**: one primary action per area, secondary beside it, tertiary or ghost for the rest; danger for destructive actions. Text left-aligned, icons at the end.
- **Fields**: label above, helper text below; invalid shows the error line and icon. Group checkboxes and radios with `<ui-checkbox-group>` / `<ui-radio-group>`.
- **Overlays**: modal for a short decision, side panel to keep the page visible, tearsheet for a large task.

## Do's and Don'ts

Do:
- Use the components and the `--ui-*` tokens; restyle with tokens and `::part()`.
- Nest `<ui-layer>` for surfaces on surfaces.
- Give icon-only buttons a `label`; set `lang` (Thai uses the Buddhist era in dates).
- Keep one primary button per area.

Don't:
- Hard-code colors, fonts or spacing, or style inside the shadow DOM.
- Round corners or add shadows to surfaces.
- Add a second accent color.
- Put controls inside a clickable or linked card.
