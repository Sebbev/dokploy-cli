# Dokploy CLI

A CLI for managing your Dokploy instance from the terminal.

> Note: This is a community-made, unofficial Dokploy CLI. It is not affiliated with or endorsed by the Dokploy team.

## Requirements

- Bun 1.0+ (for building and local development)
- Node.js 18+ (to run the built binary; enforced via `engines`)

## Install & build

1. Install dependencies

```bash
bun install
```

1. Build the CLI (outputs to `bin/main.js`)

```bash
bun run build
```

1. Run it

- From source (no build):

```bash
# Run directly with Bun
bun run src/main.ts --help
```

- Using the built binary:

```bash
# With Node
node ./bin/main.js --help

# Or with Bun
bun ./bin/main.js --help
```

Note: When installed as a package, the binary name is `dokploy` (see `bin` in `package.json`). From this repo locally, prefer the built binary as shown above.

## Usage

Show help and version:

```bash
node ./bin/main.js --help
node ./bin/main.js --version
```

Current top-level commands:

- `auth` – authenticate against a Dokploy server
- `env` – pull/push environment variables for applications/compose services

---

## Authentication

The CLI stores auth settings in `config.json` (created alongside the binary/repo root). You can provide flags or use interactive prompts.

### Login

```bash
node ./bin/main.js auth login [--url <URL>] [--token <TOKEN>]
```

- `--url` The Dokploy server URL, e.g. `https://panel.dokploy.com`
- `--token` Your API token

If flags are omitted, you’ll be prompted:

```text
Enter your Dokploy server URL (e.g. https://panel.dokploy.com):
Enter your authentication token:
```

On success you’ll see:

```text
Validating server...
Successfully authenticated with Dokploy!
```

Common validation messages:

- Invalid URL format -> a clear validation error is shown
- Empty token -> a clear validation error is shown

### Verify

```bash
node ./bin/main.js auth verify
```

Checks the saved `config.json` by making a request to the server. Typical outputs:

- Success: `Successfully authenticated with Dokploy!`
- Failure: `Failed to authenticate with Dokploy: <reason>`
- If config is missing/invalid: `Invalid configuration file. Please authenticate again using the 'login' command.`

---

## Environment variables

Interactively pull and push environment variables for a specific Project → Environment → Service (Application or Compose).

### Pull

```bash
node ./bin/main.js env pull <file>
```

What happens:

1. You’ll be prompted to select the Project
2. Then the Environment
3. Then the Service (shows Applications and Compose services)
4. The service’s env is written to `<file>`

Typical prompts/messages:

- If `<file>` exists, you’ll be asked: `File already exists. Overwrite?` (default: No)
- Success: `Environment variables pulled successfully`

Example:

```bash
node ./bin/main.js env pull .env
```

### Push

```bash
node ./bin/main.js env push <file>
```

What happens:

1. You’re asked to confirm pushing because it overwrites variables: `Are you sure you want to push environment variables? This will overwrite any existing variables.`
2. The CLI reads `<file>`
3. You select Project → Environment → Service
4. The env is pushed to the selected service

Typical prompts/errors:

- If `<file>` is missing: `File does not exist, please provide a valid file path.`
- API errors show details like: `Failed to push environment variables: <message> (<status>)`
- Success: `Environment variables pushed successfully`

Examples:

```bash
node ./bin/main.js env push .env
```

---

## Development

- One-off build:

```bash
bun run build
```

- Watch mode (rebuilds on changes):

```bash
bun run dev
```

- Run from source (no build):

```bash
bun run src/main.ts --help
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
