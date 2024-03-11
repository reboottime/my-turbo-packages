# README

- **Purpose**: Build React component lib
- **Expectation**: import component directly, for example `import { Button } "@acme/core"`

## Roadmap

- [x] Build script
- [x] File exports
- [x] unit tests
  - [x] assertion
  - [x] testing react
    - [x] react testing library
    - [x] test user interaction: [user-event@14](https://testing-library.com/docs/user-event/intro)
    - [x] react-hooks-testing-library
- [x] Apply `changeset` to CI/CD
- [x] Publish to `NPM` registry

---

## Minor Warnings

- Grammar:

  - We currently support importing the button module as import { Button } from "@acme/core", rather than import Button from '@acme/core/button'.
  - This distinction doesn't matter significantly as the bundling tool utilized in this repository is `tsup`, which handles tree shaking efficiently. This implies that when using import { Button } from "@acme/core", the output excludes any unused code.

- `use client` banner with Compile Target as `es5` has warnings

## Knowledge Base

- [tsup](https://tsup.egoist.dev/#generate-declaration-file): Bundle your TypeScript library with no config, powered by esbuild.

- [Unit test for test user interaction](https://testing-library.com/docs/user-event/intro) with ease
- [Test React component](https://testing-library.com/docs/) without going to eval
- [Testing react hooks](https://react-hooks-testing-library.com/)
