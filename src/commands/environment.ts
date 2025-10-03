import fs from "node:fs/promises";
import { confirm, select } from "@inquirer/prompts";
import { Command } from "commander";
import pc from "picocolors";
import { initOpenAPIConfig } from "@/config";
import { ApiError, ApplicationService, ComposeService, ProjectService } from "@/generated/dokploy";
import type { Application, Compose, Project } from "@/types";
import { isError } from "@/utils";

export function registerEnvironmentCommands(program: Command) {
	const subCommand = new Command("env");

	pull(subCommand);
	push(subCommand);

	program.addCommand(subCommand);
}

function pull(program: Command) {
	program
		.command("pull")
		.description("Pull environment variables from a specified project->environment->service")
		.argument("<file>", "File to save the environment variables to")
		.action(async function (filePath: string) {
			initOpenAPIConfig();

			const projects: Project[] = await ProjectService.projectAll();
			projects.sort((a, b) => a.name.localeCompare(b.name));

			const selectedProject = await select({
				message: pc.blue("Select Project"),
				choices: projects.map((project) => ({
					name: project.name,
					value: project,
				})),
			});
			selectedProject.environments.sort((a, b) => a.name.localeCompare(b.name));

			const selectedEnvironment = await select({
				message: pc.blue("Select Environment"),
				choices: selectedProject.environments.map((environment) => ({
					name: environment.name,
					value: environment,
				})),
			});
			selectedEnvironment.applications.sort((a, b) => a.name.localeCompare(b.name));
			selectedEnvironment.compose.sort((a, b) => a.name.localeCompare(b.name));

			const pulledEnv = await select({
				message: pc.blue("Select service to pull environment variables from"),
				choices: [
					...selectedEnvironment.applications.map((application) => ({
						name: `${application.name} (Application)`,
						value: application.env,
					})),
					...selectedEnvironment.compose.map((compose) => ({
						name: `${compose.name} (Compose)`,
						value: compose.env,
						description: compose.description,
					})),
				],
			});

			try {
				await fs.writeFile(filePath, pulledEnv || "", {
					flag: "wx",
				});
			} catch (error) {
				if (!isError(error, "EEXIST")) {
					throw error;
				}

				const overwrite = await confirm({
					message: "File already exists. Overwrite?",
					default: false,
				});

				if (!overwrite) {
					this.error(pc.red("Aborting"));
				}

				await fs.writeFile(filePath, pulledEnv || "", {
					flag: "w",
				});
			}

			console.log(pc.green("\nEnvironment variables pulled successfully"));
		});
}

function push(program: Command) {
	program
		.command("push")
		.description("Push environment variables to a specified project->environment->service")
		.argument("<file>", "File to read the environment variables from")
		.action(async function (filePath) {
			initOpenAPIConfig();

			const confirmedPush = await confirm({
				message:
					"Are you sure you want to push environment variables? This will overwrite any existing variables.",
				default: false,
			});

			if (!confirmedPush) {
				this.error(pc.red("Aborting"));
			}

			let envContents: string;
			try {
				envContents = (await fs.readFile(filePath, { flag: "r" })).toString();
			} catch (error) {
				if (isError(error, "ENOENT")) {
					this.error(pc.red("File does not exist, please provide a valid file path."));
				}

				throw error;
			}

			const projects: Project[] = await ProjectService.projectAll();
			projects.sort((a, b) => a.name.localeCompare(b.name));

			const selectedProject = await select({
				message: pc.blue("Select Project"),
				choices: projects.map((project) => ({
					name: project.name,
					value: project,
				})),
			});
			selectedProject.environments.sort((a, b) => a.name.localeCompare(b.name));

			const selectedEnvironment = await select({
				message: pc.blue("Select Environment"),
				choices: selectedProject.environments.map((environment) => ({
					name: environment.name,
					value: environment,
				})),
			});
			selectedEnvironment.applications.sort((a, b) => a.name.localeCompare(b.name));
			selectedEnvironment.compose.sort((a, b) => a.name.localeCompare(b.name));

			const selectedService = await select<Application | Compose>({
				message: pc.blue("Select service to pus environment variables to"),
				choices: [
					...selectedEnvironment.applications.map((application) => ({
						name: `${application.name} (Application)`,
						value: application,
					})),
					...selectedEnvironment.compose.map((compose) => ({
						name: `${compose.name} (Compose)`,
						value: compose,
						description: compose.description,
					})),
				],
			});

			if ("applicationId" in selectedService) {
				try {
					await ApplicationService.applicationUpdate({
						applicationId: selectedService.applicationId,
						env: envContents,
					});
				} catch (error) {
					if (error instanceof ApiError) {
						this.error(
							pc.red(`Failed to push environment variables: ${error.message} (${error.status})`),
						);
					} else {
						this.error(pc.red("Failed to push environment variables"));
					}
				}
			} else {
				try {
					await ComposeService.composeUpdate({
						composeId: selectedService.composeId,
						env: envContents,
					});
				} catch (error) {
					if (error instanceof ApiError) {
						this.error(
							pc.red(`Failed to push environment variables: ${error.message} (${error.status})`),
						);
					} else {
						this.error(pc.red("Failed to push environment variables"));
					}
				}
			}

			console.log(pc.green("\nEnvironment variables pushed successfully"));
		});
}
