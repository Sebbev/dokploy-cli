# Dokploy CLI

A CLI for managing your Dokploy server from the terminal.

> Note: This is a community-made, unofficial Dokploy CLI. It is not affiliated with or endorsed by the Dokploy team.

## Table of contents

- [Dokploy CLI](#dokploy-cli)
  - [Table of contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Installation](#installation)
    - [Global install](#global-install)
    - [Use with npx](#use-with-npx)
    - [Add to a project](#add-to-a-project)
  - [Usage](#usage)
    - [Show help and version](#show-help-and-version)
  - [Authentication](#authentication)
    - [Login](#login)
    - [Verify](#verify)
  - [Environment variables](#environment-variables)
    - [Pull](#pull)
    - [Push](#push)
  - [Projects](#projects)
    - [Create](#create)
    - [Info](#info)
    - [List](#list)
  - [Development (from source)](#development-from-source)
    - [Regenerate API client](#regenerate-api-client)
  - [License](#license)

## Requirements

- Bun 1.0+ (for building and local development)
- Node.js 18+ (to run the built binary; enforced via `engines`)

## Installation

### Global install

```bash
npm i -g @sebbev/dokploy-cli
# or
pnpm add -g @sebbev/dokploy-cli
# or
yarn global add @sebbev/dokploy-cli
# or
bun add -g @sebbev/dokploy-cli
```

After a global install, run the CLI with:

```bash
dokploy-cli --help
```

### Use with npx

```bash
npx @sebbev/dokploy-cli --help
```

### Add to a project

```bash
npm i -D @sebbev/dokploy-cli
# or
pnpm add -D @sebbev/dokploy-cli
# or
yarn add -D @sebbev/dokploy-cli
# or
bun add -d @sebbev/dokploy-cli
```

Then invoke with npx or a package.json script:

```bash
npx dokploy-cli --version
```

## Usage

### Show help and version

```bash
dokploy-cli --help
dokploy-cli --version
```

Current top-level commands:

- `auth` – authenticate against a Dokploy server
- `env` – pull/push environment variables for applications/compose services
- `project` – manage projects (create, list, get info)

---

## Authentication

The CLI stores auth settings in a local configuration file. You can provide flags or use interactive prompts.

### Login

```bash
dokploy-cli auth login [--url <URL>] [--token <TOKEN>]
```

- Flags:
  - `--url` Dokploy server URL (e.g. `https://panel.dokploy.com`)
  - `--token` API token
  - If omitted, you’ll be prompted interactively.

### Verify

```bash
dokploy-cli auth verify
```

Validates saved credentials by calling the server.

---

## Environment variables

Interactively pull and push environment variables for a specific Project → Environment → Service (Application or Compose).

### Pull

```bash
dokploy-cli env pull <file>
```

Description: interactively select Project → Environment → Service and write the service’s env to `<file>`.

Args:

- `<file>` Output path for the env contents (e.g. `.env`).

### Push

```bash
dokploy-cli env push <file>
```

Description: read env from `<file>`, choose Project → Environment → Service, and update the selected service’s env.

Args:

- `<file>` Input path of the env file to push (e.g. `.env`).

---

## Projects

Manage Dokploy projects - create new projects, list existing ones, and get detailed information.

### Create

```bash
dokploy-cli project create [--name <NAME>] [--description <DESCRIPTION>] [--yes]
```

Description: create a new project with interactive prompts or flags.

Flags:

- `--name` Project name
- `--description` Project description (optional)
- `--yes` Skip confirmation prompt

### Info

```bash
dokploy-cli project info [--project <PROJECT_ID>]
```

Description: get detailed information about a project, including all environments and services.

Flags:

- `--project` Project ID (if omitted, you'll be prompted to select from a list)

### List

```bash
dokploy-cli project list
```

Description: list all projects with their names and descriptions.

---

## Development (from source)

- Install deps:

```bash
bun install
```

- One-off build (outputs to `bin/main.js`):

```bash
bun run build
```

- Watch mode (rebuilds on changes):

```bash
bun run dev
```

### Regenerate API client

The SDK in `src/generated/dokploy` is generated from the local `dokploy-openapi.json`.

```bash
bun run dokploy:generate
```

---

## License

MIT
