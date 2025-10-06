import { confirm, input, select } from "@inquirer/prompts";
import { Command } from "commander";
import pc from "picocolors";
import * as v from "valibot";
import { initOpenAPIConfig } from "@/config";
import {
	ApiError,
	ApplicationService,
	ComposeService,
	EnvironmentService,
	ProjectService,
} from "@/generated/dokploy";
import type { Application, Compose, Environment, Project } from "@/types";

export function registerApplicationCommands(program: Command) {
	const subCommand = new Command("app");

	create(subCommand);
	deleteApp(subCommand);

	program.addCommand(subCommand);
}

function create(program: Command) {
	program
		.command("create")
		.description("Create a new application in a specified project->environment")
		.option("-p, --project [PROJECT_ID]", "Project ID")
		.option("-e, --environment [ENVIRONMENT_ID]", "Environment ID")
		.option("-n, --name [APP_NAME]", "Application name")
		.option("-d, --description [DESCRIPTION]", "Application description")
		.option("-y, --yes", "Skip confirmation prompt", false)
		.action(async function () {
			type Options = {
				project?: string;
				environment?: string;
				name?: string;
				description?: string;
				yes: boolean;
			};
			const NameSchema = v.pipe(v.string(), v.minLength(1));
			const DescriptionSchema = v.optional(v.string());

			const options = this.opts<Options>();

			initOpenAPIConfig();

			let project: Project;
			if (options.project) {
				try {
					project = await ProjectService.projectOne(options.project);
					console.log(pc.green("✔"), pc.bold(pc.blue("Select Project")), pc.cyan(project.name));
				} catch (error) {
					if (error instanceof Error) {
						this.error(
							pc.red(`Failed to fetch project with ID ${options.project}: ${error.message}`),
						);
					} else {
						this.error(pc.red("An unknown error occurred while fetching the project."));
					}
				}
			} else {
				const projects: Project[] = await ProjectService.projectAll();
				projects.sort((a, b) => a.name.localeCompare(b.name));

				project = await select({
					message: pc.blue("Select Project"),
					choices: projects.map((project) => ({
						name: project.name,
						value: project,
					})),
				});
			}

			let environment: Environment;
			if (options.environment) {
				try {
					environment = await EnvironmentService.environmentOne(options.environment);
					if (environment.projectId !== project.projectId) {
						this.error(
							pc.red(
								`Environment with ID ${options.environment} does not belong to project ${project.name}`,
							),
						);
					}
					console.log(
						pc.green("✔"),
						pc.bold(pc.blue("Select Environment")),
						pc.cyan(environment.name),
					);
				} catch (error) {
					if (error instanceof Error) {
						this.error(
							pc.red(
								`Failed to fetch environment with ID ${options.environment}: ${error.message}`,
							),
						);
					} else {
						this.error(pc.red("An unknown error occurred while fetching the environment."));
					}
				}
			} else {
				try {
					const environments: Environment[] = await EnvironmentService.environmentByProjectId(
						project.projectId,
					);
					environments.sort((a, b) => a.name.localeCompare(b.name));

					if (!environments.length) {
						this.error(pc.red("No environments found for the selected project."));
					}

					environment = await select({
						message: pc.blue("Select Environment"),
						choices: environments.map((environment) => ({
							name: environment.name,
							value: environment,
						})),
					});
				} catch (error) {
					if (error instanceof Error) {
						this.error(
							pc.red(
								`Failed to fetch environment with ID ${options.environment}: ${error.message}`,
							),
						);
					} else {
						this.error(pc.red("An unknown error occurred while fetching the environment."));
					}
				}
			}

			let name: string;
			if (options.name) {
				const result = v.safeParse(NameSchema, options.name);
				if (!result.success) {
					this.error(pc.red(result.issues[0].message));
				}
				name = result.output;
				console.log(pc.green("✔"), pc.bold(pc.blue("Application Name")), pc.cyan(name));
			} else {
				name = v.parse(
					NameSchema,
					await input({
						message: pc.blue("Application Name"),
						required: true,
						validate: (value) => {
							const result = v.safeParse(NameSchema, value);
							return result.success ? true : result.issues[0].message;
						},
					}),
				);
			}

			let description: string | undefined;
			if (options.description) {
				const result = v.safeParse(DescriptionSchema, options.description);
				if (!result.success) {
					this.error(pc.red(result.issues[0].message));
				}
				description = result.output;
				console.log(
					pc.green("✔"),
					pc.bold(pc.blue("Application Description")),
					pc.cyan(description || "N/A"),
				);
			} else {
				description = v.parse(
					DescriptionSchema,
					await input({
						message: pc.blue("Application Description (optional)"),
						required: false,
						validate: (value) => {
							const result = v.safeParse(DescriptionSchema, value);
							return result.success ? true : result.issues[0].message;
						},
					}),
				);
			}

			let accepted = options.yes;
			if (!accepted) {
				accepted = await confirm({
					message: pc.blue("Do you want to create the application?"),
					default: false,
				});

				if (!accepted) {
					this.error(pc.red("Aborting"));
				}
			} else {
				console.warn(pc.yellow("Skipping confirmation prompt due to --yes flag."));
			}

			try {
				await ApplicationService.applicationCreate({
					name,
					description,
					environmentId: environment.environmentId,
				});
				console.log(pc.green(`Application '${name}' created successfully!`));
			} catch (error) {
				if (error instanceof Error) {
					this.error(pc.red(`Failed to create application: ${error.message}`));
				} else {
					this.error(pc.red("An unknown error occurred while creating the application."));
				}
			}
		});
}

function deleteApp(program: Command) {
	program
		.command("delete")
		.description("Delete an application from a specified project->environment");
}
