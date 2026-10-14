# Installation

The package is public on npm. Pick the way that fits your app; you can mix them.

## Web components (any framework)

```bash
npm i @purpurabog/ui lit
```

Load the design tokens once per page, then the components you use:

```html
<link rel="stylesheet" href="node_modules/@purpurabog/ui/dist/tokens.css" />
<script type="module">
  import '@purpurabog/ui';              // every component
  // or only what you use: import '@purpurabog/ui/date-picker';
</script>
```

### React

React wrappers with typed props and events come with the package. They need `@lit/react` too (an optional peer dependency, only for `@purpurabog/ui/react`):

```bash
npm i @purpurabog/ui lit @lit/react
```

Load the tokens once (`import '@purpurabog/ui/tokens.css';`), then import the wrappers you use from `@purpurabog/ui/react`.

## React + Tailwind with shadcn

Copy a component into your app and edit its classes. Its behaviour (keyboard, focus, ARIA) comes from `@purpurabog/ui/headless`, which the CLI installs for you.

1. Your app needs Tailwind v4 and a `components.json`. If you already use shadcn, add only the `registries` part:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": { "config": "", "css": "src/index.css", "baseColor": "neutral", "cssVariables": true, "prefix": "" },
  "aliases": { "components": "@/components", "utils": "@/lib/utils", "ui": "@/components/ui", "lib": "@/lib", "hooks": "@/hooks" },
  "registries": {
    "@kanok-ui": { "url": "https://cdn.jsdelivr.net/npm/@purpurabog/ui@latest/registry/{name}.json" }
  }
}
```

Pin the version in the URL (`@purpurabog/ui@0.82.0` instead of `@latest`) so every copy in your app comes from the same release.

2. Add components:

```bash
npx shadcn@4 add @kanok-ui/tw-select @kanok-ui/tw-button
```

3. Import the tokens and the theme after Tailwind in your main CSS:

```css
@import 'tailwindcss';
@import './components/ui/primitives/tokens.css';
@import './components/ui/react-tw/theme.css';
```

The files land in `components/ui/` (under `src/` when your app has one).

## Unstyled React (headless)

For your own design system: the behaviour without a single class.

```bash
npm i @purpurabog/ui react react-dom
```

State shows as `data-*` attributes (`data-open`, `data-selected`, `data-highlighted` …) to style on. The parts have their own section: start at [Headless](https://parntengza.github.io/kanok-ui-docs/en/headless/).

## Use your first component

The same dropdown as a web component, with the React wrapper and with React + Tailwind. Every example on this site comes in these tabs: pick yours once and the other pages follow. The headless version is in [Headless](https://parntengza.github.io/kanok-ui-docs/en/headless/#your-first-component).


HTML:

```html
<html lang="th">
<ui-dropdown label="Contract type" name="type" placeholder="Choose a type">
  <option value="sale">Sale</option>
  <option value="lease">Lease</option>
</ui-dropdown>
```

React:

```tsx
import { UiDropdown } from '@purpurabog/ui/react';

<UiDropdown label="Contract type" name="type" placeholder="Choose a type">
  <option value="sale">Sale</option>
  <option value="lease">Lease</option>
</UiDropdown>
```

React + Tailwind:

```tsx
// npx shadcn@4 add @kanok-ui/tw-dropdown
import { Dropdown } from '@/components/ui/react-tw/dropdown';

const types = [
  { value: 'sale', label: 'Sale' },
  { value: 'lease', label: 'Lease' },
];

<Dropdown label="Contract type" name="type" placeholder="Choose a type" items={types} />
```

`lang` on the element or any ancestor sets the language of the built-in text of the web components and the React wrappers (Thai and English are included).
