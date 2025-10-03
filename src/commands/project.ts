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
		.option("-p, --project [project]", "Project ID")
		.action(async () => {
			type Options = {
				project?: string;
			};

			initOpenAPIConfig();

			const options = program.opts<Options>();

			let project: Project;
			if (options.project) {
			} else {
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
