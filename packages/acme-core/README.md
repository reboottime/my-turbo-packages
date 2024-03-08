# README

- **Purpose**: Build React component lib
- **Expectation**:
  - import component directly, for example `import { Button } "@acme/core"`
  - <del>import from component, for example `import { Button } from "@acme/core/button"`</del>

## Roadmap

- [x] Build script **[done]**
- [x] File exports **[done]**
- [x] Unit tests **[done]**
- [ ] Apply changeset to CI/CD
- [ ] Publish to `npm` registry

---

## Unresolved issues

- issue 1:

  - symptom: importing using this way `import { Button } from "@acme/core/button"` has typescript warning as `Cannot find module '@acme/core/button' or its corresponding type declarations.ts(2307)
  - impact: it doesn't matter as our code built by `tsup` supports tree shaking, so even if user imports the `button` via `import Button "@acme/core/button"`, the final file doesn't contain all other not used components
  - attempted solution: declare types file for each exports
  - conclusion: _ignore_, and there is no need to declare exports for
    button, input, etc.

- `use client` banner with compile target as `es5`

## Knowledge Base

- [tsup](https://tsup.egoist.dev/#generate-declaration-file)
