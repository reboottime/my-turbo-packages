# README

- Purpose: Build React component lib
- Expectation:
  - import component directly, for example `import { Button } "@acme/core"`
  - <del>import from component, for example `import { Button } from "@acme/core/button"`</del>

## Roadmap

- build script [done]
- file exports [done]
- unit test [done]
- Apply changeset to CI/CD
- publish to `npm` registry

---

## Unresolved issues

- issue 1:
  - symptom: importing using this way `import { Button } from "@acme/core/button"` has typescript warning as `Cannot find module '@acme/core/button' or its corresponding type declarations.ts(2307)
  - impact: it doesn't matter as our code built by tsup supports tree shaking, so even if user imports the `button` via `import Button "@acme/core/button"`, the final file doesn't contain all other not used components
  - conclusion: ignore, and there is no need to declare exports for button, input, etc.

`

- `use client` banner with compile target as `es5`

## Knowledge Base

- [tsup](https://tsup.egoist.dev/#generate-declaration-file)
