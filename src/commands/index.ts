import type { Command } from "commander";
import { registerAuthenticationCommands } from "./authentication";
import { registerEnvironmentCommands } from "./environment";

export function registerCommands(program: Command) {
	registerAuthenticationCommands(program);
	registerEnvironmentCommands(program);
}
