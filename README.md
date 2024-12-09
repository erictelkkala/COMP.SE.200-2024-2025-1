# Student template
[![Coverage Status](https://coveralls.io/repos/github/erictelkkala/COMP.SE.200-2024-2025-1/badge.svg)](https://coveralls.io/github/erictelkkala/COMP.SE.200-2024-2025-1)
## Purpose of this repository

This is projects implements unit tests for files in the upstream repository.

## Running tests locally
Tests can be run locally with:
```shell
npm t
```

## Generating code coverage locally
Code coverage can be generated locally with:
```shell
npm run coverage
```

## What does the CI do?
The current implementation:
1. The runner runs `npm ci`, which install the dependencies found in `package.json`
2. Then it builds **and** tests the project in multiple different versions of Node, to ensure backwards compatibility
3. If the tests pass in all the Node versions:
   1. Code coverage is generated on the runner with `npm run coverage`
   2. It uses the [Coveralls GitHub Action](https://github.com/coverallsapp/github-action) to publish the coverage report to Coveralls
