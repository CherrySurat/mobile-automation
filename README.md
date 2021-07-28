# Pomelo.

## seed-npm-module 🌱❤️📦🌳

`seed-npm-module` contains Pomelo's default npm package setup.

It is recommended to start all your custom NPM packages from this seed.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a Mac / Linux Workstation.
- You have installed the following software:
  -  NodeJS (`~> v12.14.0`)
- You have read all [guides](ttps://pomelofashion.atlassian.net/wiki/spaces/ENG/pages/809566681/JavaScript) and documentation related to this project.

## Using `seed-npm-module`

You can use `seed-npm-module` within your projects as you would any other NPM package.


```bash
npm install @pomelofashion/package-name
```

```js
const package = require('@pomelofashion/package-name');

package.method();
```

## Contributing to `seed-npm-module`

To contribute to `seed-npm-module`, follow these steps:

1. Clone this repository.
2. Read [Running code quality checks](#quality-checks).
3. Create a feature branch: `git checkout -b <branch_name>`.
4. Make your changes and commit them: `git commit -m '<commit_message>'`
5. Push to the original branch: `git push origin <branch_name>`
6. Create the pull request against `develop`.

**<a name="quality-checks"></a>Running code quality checks:**

To ensure the code quality of this project is kept consistent we make use of pre-commit hooks. To install them, run the commands below.

```bash
brew install pre-commit
pre-commit install --install-hooks -t pre-commit -t commit-msg
```

## Contact

If you want to contact someone about this project, please refer to the following channel: `#eng_team_platform`
