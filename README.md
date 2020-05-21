# CSS Scoping Test

This is a simple app comparing different ways to scope CSS in React components.

# To run

```
yarn
yarn dev
```

# Requirements for component libraries

- Tree-shaking: the consuming library should be able to import only what it needs
- Scoped CSS: there must be a way to scope CSS per component
- Global CSS: there must be a way to use global CSS, alongside scoped CSS
- No CSS imports on Components: Components cannot import CSS files (CSS modules are ok)<sup>\*</sup>
- Shared styles: there must be a way to share CSS across components without duplicating the CSS

<sup>\*</sup> Because we're not sure what order components will be loaded in, unscoped CSS is dangerous to import in an unspecified order. CSS imports will error in the latest version of Next.

# Options considered

- CSS Modules
- Emotion

# Pros Cons of each

TODO