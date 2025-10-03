import { Command } from "commander";
import { registerCommands } from "@/commands";
import { version } from "../package.json";
import { ensureConfig } from "./config";

ensureConfig();

const program = new Command();

program
	.name("Dokploy CLI")
	.description("A CLI tool for managing your Dokploy instance")
	.version(version);

registerCommands(program);

program.parse(process.argv);
