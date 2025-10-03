import { input } from "@inquirer/prompts";
import { Command } from "commander";
import pc from "picocolors";
import * as v from "valibot";
import { initOpenAPIConfig, setMany } from "@/config";
import { UserService } from "@/generated/dokploy";

export function registerAuthenticationCommands(program: Command) {
	const subCommand = new Command("auth");

	login(subCommand);
	verify(subCommand);

	program.addCommand(subCommand);
}

function login(authCommand: Command) {
	type Options = { token?: string; url?: string };

	authCommand
		.command("login")
		.description("Authenticate with Dokploy")
		.option("-t, --token <VALUE>", "API token")
		.option("-u, --url <VALUE>", "server URL")
		.action(async function () {
			const options = this.opts<Options>();
			const UrlSchema = v.pipe(
				v.string(),
				v.url(),
				v.transform((str) => str.replace(/\/+$/, "")),
			);
			const TokenSchema = v.pipe(v.string(), v.minLength(1));

			let url: string;
			if (!options.url) {
				url = v.parse(
					UrlSchema,
					await input({
						message: pc.blue("Enter your Dokploy server URL (e.g. https://panel.dokploy.com):"),
						required: true,
						validate: (value) => {
							const result = v.safeParse(UrlSchema, value);
							return result.success ? true : result.issues[0].message;
						},
					}),
				);
			} else {
				const result = v.safeParse(UrlSchema, options.url);
				if (!result.success) {
					this.error(pc.red(result.issues[0].message));
				}
				url = result.output;
			}

			let token: string;
			if (!options.token) {
				token = v.parse(
					TokenSchema,
					await input({
						message: pc.blue("Enter your authentication token:"),
						required: true,
						validate: (value) => {
							const result = v.safeParse(TokenSchema, value);
							return result.success ? true : result.issues[0].message;
						},
					}),
				);
			} else {
				const result = v.safeParse(TokenSchema, options.token);
				if (!result.success) {
					this.error(pc.red(result.issues[0].message));
				}
				token = result.output;
			}

			setMany({ token, url });

			initOpenAPIConfig();

			try {
				console.log(pc.dim("\nValidating server..."));
				void (await UserService.userGet());
				console.log(pc.green("Successfully authenticated with Dokploy!"));
			} catch (error) {
				if (error instanceof Error) {
					this.error(pc.red(`Failed to authenticate with Dokploy: ${error.message}`));
				} else {
					this.error(pc.red("Failed to authenticate with Dokploy"));
				}
			}
		});
}

async function verify(authCommand: Command) {
	authCommand
		.command("verify")
		.description("Verify authentication with Dokploy")
		.action(async function () {
			initOpenAPIConfig();

			try {
				console.log(pc.dim("Validating token with server..."));
				void (await UserService.userGet());
				console.log(pc.green("Successfully authenticated with Dokploy!"));
			} catch (error) {
				if (error instanceof Error) {
					this.error(pc.red(`Failed to authenticate with Dokploy: ${error.message}`));
				} else {
					this.error(pc.red("Failed to authenticate with Dokploy"));
				}
			}
		});
}
