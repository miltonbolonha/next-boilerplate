# Contribuindo para o Boilerplate Next.js

Antes de começar a contribuir com este projeto, obrigado pelo seu interesse em torná-lo ainda melhor! Aqui estão algumas diretrizes para ajudar você a colaborar de forma efetiva:

Verifique se já há alguma Issue ou Pull Request aberta relacionada ao que você deseja contribuir. Isso pode evitar duplicações e ajudar a economizar tempo.

Caso encontre algo que queira melhorar ou corrigir, abra uma nova Issue explicando claramente o problema e, se possível, forneça informações adicionais para ajudar na reprodução.

Se estiver adicionando ou alterando documentação, certifique-se de adicionar as informações no diretório adequado e seguindo o formato existente.

Se deseja adicionar novos recursos, crie um Pull Request com uma descrição clara das mudanças propostas e explique como elas melhoram o projeto.

Antes de enviar seu Pull Request, verifique se todos os testes passam e que a cobertura do código continua alta.

Se for sua primeira contribuição, seja paciente e esteja aberto a feedback e sugestões.

Agradecemos a sua colaboração em tornar este boilerplate Next.js um recurso valioso para o ensino de tecnologia! Juntos, podemos criar uma comunidade aberta e acolhedora.

---

# Contributing to Next.js

[Watch the 40-minute walkthrough video on how to contribute to Next.js.](https://www.youtube.com/watch?v=cuoNzXFLitc)

- Read about our [Commitment to Open Source](https://vercel.com/oss).
- Before jumping into a PR be sure to search [existing PRs](https://github.com/vercel/next.js/pulls) or [issues](https://github.com/vercel/next.js/issues) for an open or closed item that relates to your submission.

## Repository

- [Triaging](./contributing/repository/triaging.md)
- [Linting](./contributing/repository/linting.md)
- [Release Channels and Publishing](./contributing/repository/release-channels-publishing.md)
- [Pull Request Descriptions](./contributing/repository/pull-request-descriptions.md)

## Documentation

- [Adding Documentation](./contributing/docs/adding-documentation.md)

## Examples

To contribute to [our examples](./examples), please see

- [Adding Examples](./contributing/examples/adding-examples.md)
- [Run Example Apps](./contributing/examples/run-example-apps.md)

## Core

- [Developing](./contributing/core/developing.md)
- [Building](./contributing/core/building.md)
- [Testing](./contributing/core/testing.md)
- [Adding Error Links](./contributing/core/adding-error-links.md)
- [Adding a new feature](./contributing/core/adding-features.md)
- [Developing Using Local App](./contributing/core/developing-using-local-app.md)
<!-- - [Using the VS Code Debugger](./contributing/core/vscode-debugger.md) -->

# npm CLI Contributor Roles and Responsibilities

## CHANGE THIS PLEASE

## Table of Contents

- [Introduction](#introduction)
- [Code Structure](#code-structure)
- [Running Tests](#running-tests)
- [Debugging](#debugging)
- [Coverage](#coverage)
- [Benchmarking](#benchmarking)
- [Types of Contributions](#types-of-contributions)
  - [Contributing an Issue?](#contributing-an-issue)
  - [Contributing a Question?](#contributing-a-question)
  - [Contributing a Bug Fix?](#contributing-a-bug-fix)
  - [Contributing a Feature?](#contributing-a-bug-feature)
- [Development Dependencies](#development-dependencies)
- [Dependencies](#dependencies)

## Introduction

Welcome to the npm CLI Contributor Guide! This document outlines the npm CLI repository's process for community interaction and contribution. This includes the issue tracker, pull requests, wiki pages, and, to a certain extent, outside communication in the context of the npm CLI. This is an entry point for anyone wishing to contribute their time and effort to making npm a better tool for the JavaScript community!

All interactions in the npm repository are covered by the [npm Code of Conduct](https://www.npmjs.com/policies/conduct)

## Code Structure

```
/
├── bin/
│   │                  # Directory for executable files. It's very rare that you
│   │                  # will need to update a file in this directory.
│   │
│   ├── npm               # npm-cli entrypoint for bourne shell
│   ├── npm-cli.js        # npm-cli entrypoint for node
│   ├── npm.cmd           # npm-cli entrypoint for windows
│   ├── npx               # npx entrypoint for bourne shell
│   ├── npx-cli.js        # npx entrypoint for node
│   └── npx.cmd           # npx entrypoint for windows
│
├── docs/  📖
│   │                  # Directory that contains the documentation website for
│   │                  # the npm-cli. You can run this website locally, and have
│   │                  # offline docs! 🔥📖🤓
│   │
│   ├── content/          # Markdown files for site content
│   ├── src/              # Source files for the website; nextjs related
│   └── package.json      # Site manifest; scripts and dependencies
│
├── lib/  📦
│                      # All the Good Bits(tm) of the CLI project live here
│
├── node_modules/  🔋
│                      # Vendored dependencies for the CLI project (See the
│                      # dependencies section below for more details).
│
├── scripts/  📜
│                      # We've created some helper scripts for working with the
│                      # CLI project, specifically around managing our vendored
│                      # dependencies, merging in pull-requests, and publishing
│                      # releases.
│
├── test/  🧪
│                      # All the tests for the CLI live in this folder. We've
│                      # got a lot of tests 🤓🧪🩺
│
├── CONTRIBUTING.md       # This file! 🎉
└── package.json          # The projects main manifest file 📃
```

## Running Tests

```
# Make sure you install the dependencies first before running tests.
$ npm install

# Run tests for the CLI (it could take a while).
$ npm run test
```

## Debugging

It can be tricky to track down issues in the CLI. It's a large code base that has been evolving for over a decade. There is a handy `make` command that will connect the **cloned repository** you have on your machine with the global command, so you can add `console.log` statements or debug any other way you feel most comfortable with.

```
# Clone the repository to start with
$ git clone git@github.com:npm/cli.git

# Change working directories into the repository
$ cd cli

# Make sure you have the latest code (if that's what you're trying to debug)
$ git fetch origin latest

# Connect repository to the global namespace
$ make link

#################
# ALTERNATIVELY
#################
# If you're working on a feature or bug, you can run the same command on your
# working branch and link that code.

# Create new branch to work from (there are many ways)
$ git checkout -b feature/awesome-feature

# Connect repository to global namespace
$ make link
```

## Coverage

We try and make sure that each new feature or bug fix has tests to go along with them in order to keep code coverages consistent and increasing. We are actively striving for 100% code coverage!

```
# You can run the following command to find out coverage
$ npm run test-coverage
```

## Benchmarking

We often want to know if the bug we've fixed for the feature we've added has any sort of performance impact. We've created a [benchmark suite](https://github.com/npm/benchmarks) to run against the CLI project from pull-requests. If you would like to know if there are any performance impacts to the work you're contributing, simply do the following:

1. Make a pull-request against this repository
2. Add the following comment to the pull-request: "`test this please ✅`"

This will trigger the [benchmark suite](https://github.com/npm/benchmarks) to run against your pull-request, and when it's finished running it will post a comment on your pull-request just like below. You'll be able to see the results from the suite inline in your pull-request.

> You'll notice that the bot-user will also add a 🚀 reaction to your comment to
> let you know that it's sent the request to start the benchmark suite.

![image](https://user-images.githubusercontent.com/2818462/72312698-e2e57f80-3656-11ea-9fcf-4a8f6b97b0d1.png)

If you've updated your pull-request and you'd like to run the the benchmark suite again, simple update your original comment, by adding `test this please ✅` again, or simply just adding another emoji to the **end**. _(The trigger is the phrase "test this please ✅" at the beginning of a comment. Updates will trigger as well, so long as the phrase stays at the beginning.)_.

![image](https://user-images.githubusercontent.com/2818462/72313006-ec231c00-3657-11ea-9bd9-227634d67362.png)

## Types of Contributions

### Contributing an Issue?

Great!! Is your [new issue](https://github.com/npm/cli/issues/new/choose) a [bug](https://github.com/npm/cli/issues/new?template=bug.md&title=%5BBUG%5D+%3Ctitle%3E), a [feature](https://github.com/npm/cli/issues/new?template=feature.md&title=%5BFEATURE%5D+%3Ctitle%3E), or a [question](https://github.com/npm/cli/issues/new?template=question.md&title=%5BQUESTION%5D+%3Ctitle%3E)?

### Contributing a Question?

Huh? 🤔 Got a situation you're not sure about?! Perfect! We've got some resources you can use.

- Our [documentation site](https://docs.npmjs.com/)
- The local docs that come with the CLI project

  > **Example**: `npm help install --viewer browser`

- The man pages that are built and shipped with the CLI

  > **Example**: `man npm-install` (only on linux/macOS)

- Search of the [current issues](https://github.com/npm/cli/issues)

### Contributing a Bug Fix?

We'd be happy to triage and help! Head over to the issues and [create a new one](https://github.com/npm/cli/issues/new?template=bug.md&title=%5BBUG%5D+%3Ctitle%3E)!

> We'll need a little bit of information about what happened, rather than "it broke". Such as:

- When did/does this bug happen?
- Can you reproduce it? _(Can you make it happen more than once.)_
- What version of `node`/`npm` are you running on your computer?
- What did you expect it to do?
- What did it \_actually do?
- etc...

### Contributing a Feature?

Snazzy, we're always up for fancy new things! If the feature is fairly minor, the team can triage it and prioritize it into our backlog. However, if the feature is a little more complex, then it's best to create an [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) in our [RFC repository](https://github.com/npm/rfcs). Exactly how to do that is outlined in that repository. If you're not sure _exactly_ how to implement your idea, or don't want to make a document about your idea, then please create an issue on that repository. We consider these RRFC's, or a "Requesting Request For Comment".

## Development Dependencies

You'll need a few things installed in order to update and test the CLI project during development:

- [node](https://nodejs.org/) v8 or greater

> We recommend that you have a [node version manager](https://github.com/nvm-sh/nvm) installed if you plan on fixing bugs that might be present in a specific version of node. With a version manager you can easily switch versions of node and test if your changes to the CLI project are working.

- [git](https://git-scm.com/) v2.11+

## Dependencies

> Package vendoring is commonly referred to as the case where dependent packages are stored in the same place as your project. That usually means you dependencies are checked into your source management system, such as Git.

The CLI project vendors its dependencies in the `node_modules/` folder. Meaning all the dependencies that the CLI project uses are contained within the project itself. This is represented by the `bundledDependencies` section in the root level `package.json` file. The main reason for this is because the `npm` CLI project is distributed with the NodeJS runtime and needs to work out of the box, which means all dependencies need to be available after the runtime is installed.

There are a couple scripts created to help manage this process in the `scripts/` folder.
