import { select } from "@inquirer/prompts";
import { Command } from "commander";
import * as pc from "picocolors";
import { initOpenAPIConfig } from "@/config";
import { ApiError, ProjectService } from "@/generated/dokploy";
import type { Project } from "@/types";

export function registerProjectCommands(program: Command) {
	const subCommand = new Command("project");

	create(subCommand);
	info(subCommand);
	list(subCommand);

	program.addCommand(subCommand);
}

function create(program: Command) {}

function info(program: Command) {
	program
		.command("info")
		.description("Get information about a project")
		.option("-p, --project <PROJECT_ID>", "Project ID")
		.action(async function () {
			type Options = {
				project?: string;
			};

			initOpenAPIConfig();

			const options = this.opts<Options>();

			let project: Project;
			if (options.project) {
				try {
					project = await ProjectService.projectOne(options.project);
				} catch (error) {
					if (error instanceof ApiError) {
						this.error(pc.red(`Failed to get project info: ${error.message}`));
					} else if (error instanceof Error) {
						this.error(pc.red(`Failed to get project info: ${error.message}`));
					} else {
						this.error(pc.red("An unknown error occurred while fetching project info."));
					}
				}
			} else {
				try {
					const projects: Project[] = await ProjectService.projectAll();
					projects.sort((a, b) => a.name.localeCompare(b.name));

					project = await select({
						message: pc.blue("Select Project"),
						choices: projects.map((project) => ({
							name: project.name,
							value: project,
						})),
					});
				} catch (error) {
					if (error instanceof ApiError) {
						this.error(pc.red(`Failed to get project info: ${error.message}`));
					} else if (error instanceof Error) {
						this.error(pc.red(`Failed to get project info: ${error.message}`));
					} else {
						this.error(pc.red("An unknown error occurred while fetching project info."));
					}
				}
			}

			console.log(pc.bold(pc.blue("\nProject Information:")));
			console.log(pc.bold("  Name:"), pc.cyan(project.name));
			console.log(pc.bold("  Description:"), pc.cyan(project.description || "No description"));
			console.log(pc.bold("  Created At:"), pc.cyan(new Date(project.createdAt).toLocaleString()));

			if (!project.environments.length) {
				console.log(pc.yellow("\nNo environments found in this project."));
			}
			for (const env of project.environments) {
				console.log(pc.bold(pc.green(`\n${env.name} (environment)`)));
				console.log(pc.bold(`  Applications(${env.applications.length}):`));
				env.applications.forEach((app) => {
					console.log(`    - ${pc.cyan(app.name)} (${app.appName})`);
				});

				console.log(pc.bold(`  Compose Services(${env.compose.length}):`));
				env.compose.forEach((compose) => {
					console.log(`    - ${pc.cyan(compose.name)} (${compose.appName})`);
				});

				console.log(pc.bold(`  MariaDB Instances(${env.mariadb.length}):`));
				env.mariadb.forEach((mdb) => {
					console.log(`    - ${pc.cyan(mdb.name)} (${mdb.appName})`);
				});

				console.log(pc.bold(`  MongoDB Instances(${env.mongo.length}):`));
				env.mongo.forEach((mdb) => {
					console.log(`    - ${pc.cyan(mdb.name)} (${mdb.appName})`);
				});

				console.log(pc.bold(`  MySQL Instances(${env.mysql.length}):`));
				env.mysql.forEach((mysqldb) => {
					console.log(`    - ${pc.cyan(mysqldb.name)} (${mysqldb.appName})`);
				});

				console.log(pc.bold(`  PostgreSQL Instances(${env.postgres.length}):`));
				env.postgres.forEach((pgdb) => {
					console.log(`    - ${pc.cyan(pgdb.name)} (${pgdb.appName})`);
				});

				console.log(pc.bold(`  Redis Instances(${env.redis.length}):`));
				env.redis.forEach((redis) => {
					console.log(`    - ${pc.cyan(redis.name)} (${redis.appName})`);
				});
			}
		});
}

function list(program: Command) {
	program
		.command("list")
		.description("List all projects")
		.action(async () => {
			initOpenAPIConfig();

			try {
				const projects: Project[] = await ProjectService.projectAll();
				projects.sort((a, b) => a.name.localeCompare(b.name));

				if (!projects.length) {
					console.log(pc.yellow("\nNo projects found."));
					return;
				}

				console.log(pc.bold(pc.green("\nProjects:")));
				projects.forEach((project, i) => {
					console.log(
						`${pc.gray(i + 1)}.`,
						pc.cyan(`${pc.bold(project.name)} — ${project.description || "No description"}`),
					);
				});
			} catch (error) {
				if (error instanceof ApiError) {
					console.error(pc.red(`Failed to list projects: ${error.message}`));
				} else if (error instanceof Error) {
					console.error(pc.red(`Failed to list projects: ${error.message}`));
				} else {
					console.error(pc.red("An unknown error occurred while listing projects."));
				}
			}
		});
}
