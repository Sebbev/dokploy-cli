import type { Command } from "commander";
import { registerApplicationCommands } from "./application";
import { registerAuthenticationCommands } from "./authentication";
import { registerEnvironmentCommands } from "./environment";
import { registerProjectCommands } from "./project";

export function registerCommands(program: Command) {
	registerAuthenticationCommands(program);
	registerEnvironmentCommands(program);
	registerProjectCommands(program);
	registerApplicationCommands(program);
}
