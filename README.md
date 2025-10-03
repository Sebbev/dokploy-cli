# Dokploy CLI

A CLI for managing your Dokploy instance from the terminal.

> Note: This is a community-made, unofficial Dokploy CLI. It is not affiliated with or endorsed by the Dokploy team.

## Table of contents

- [Requirements](#requirements)
- [Installation](#installation)
  - [Global install](#global-install)
  - [Use with npx](#use-with-npx)
  - [Add to a project](#add-to-a-project)
- [Usage](#usage)
  - [Show help and version](#show-help-and-version)
  - [Authentication](#authentication)
  - [Environment variables](#environment-variables)
- [Development (from source)](#development-from-source)
  - [Regenerate API client](#regenerate-api-client)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Requirements

- Bun 1.0+ (for building and local development)
- Node.js 18+ (to run the built binary; enforced via `engines`)

## Installation

### Global install

```bash
npm i -g dokploy-cli
# or
pnpm add -g dokploy-cli
# or
yarn global add dokploy-cli
# or
bun add -g dokploy-cli
```

After a global install, run the CLI with:

```bash
dokploy --help
```

### Use with npx

```bash
npx dokploy-cli --help
```

### Add to a project

```bash
npm i -D dokploy-cli
# or
pnpm add -D dokploy-cli
# or
yarn add -D dokploy-cli
# or
bun add -d dokploy-cli
```

Then invoke with npx or a package.json script:

```bash
npx dokploy-cli --version
```

## Usage

### Show help and version

```bash
dokploy --help
dokploy --version
```

Current top-level commands:

- `auth` – authenticate against a Dokploy server
- `env` – pull/push environment variables for applications/compose services

---

## Authentication

The CLI stores auth settings in a local configuration file. You can provide flags or use interactive prompts.

### Login

```bash
dokploy auth login [--url <URL>] [--token <TOKEN>]
```

- Flags:
  - `--url` Dokploy server URL (e.g. `https://panel.dokploy.com`)
  - `--token` API token
  - If omitted, you’ll be prompted interactively.

### Verify

```bash
dokploy auth verify
```

Validates saved credentials by calling the server.

---

## Environment variables

Interactively pull and push environment variables for a specific Project → Environment → Service (Application or Compose).

### Pull

```bash
dokploy env pull <file>
```

Description: interactively select Project → Environment → Service and write the service’s env to `<file>`.

Args:

- `<file>` Output path for the env contents (e.g. `.env`).

### Push

```bash
dokploy env push <file>
```

Description: read env from `<file>`, choose Project → Environment → Service, and update the selected service’s env.

Args:

- `<file>` Input path of the env file to push (e.g. `.env`).

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

## Troubleshooting

- Invalid configuration

  - Message: `Invalid configuration file. Please authenticate again using the 'login' command.`
  - Fix: run `auth login` again

- Auth failures when verifying or pushing/pulling

  - Ensure the URL and token are correct with `auth verify`

- File already exists on pull

  - You’ll be prompted to confirm overwrite; choose No to abort safely

- Missing `.env` (or custom file) on push
  - Create the file first, e.g. `.env`, then rerun the push command

---

## License

MIT
