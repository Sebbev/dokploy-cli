import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pc from "picocolors";
import * as v from "valibot";
import { OpenAPI } from "./generated/dokploy";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPath = path.resolve(__dirname, "..", "./config.json");

const ConfigSchema = v.partial(
	v.object({
		url: v.string(),
		token: v.string(),
	}),
);

export type Config = v.InferOutput<typeof ConfigSchema>;

let configCache: Config | null = null;

function getConfig() {
	if (configCache) return configCache;

	let rawConfig: string;
	try {
		rawConfig = fs.readFileSync(configPath).toString();
		const parsedConfig = JSON.parse(rawConfig);
		configCache = v.parse(ConfigSchema, parsedConfig);
	} catch {
		console.warn("Could not read config, creating a new one...");
		rawConfig = "{}";
		configCache = {};
		fs.writeFileSync(configPath, rawConfig);
	}

	return configCache;
}

function saveConfig() {
	try {
		fs.writeFileSync(configPath, JSON.stringify(configCache, null, 2));
	} catch (error) {
		console.error("Could not save config:", error);
	}
}

export function ensureConfig() {
	configCache = getConfig();
}

export function set<TKey extends keyof Config, TValue extends Config[TKey]>(
	key: TKey,
	value: TValue,
) {
	const config = configCache || getConfig();
	config[key] = value;
	saveConfig();
}

export function setMany(newConfig: Partial<Config>) {
	const config = configCache || getConfig();
	configCache = { ...config, ...newConfig };
	saveConfig();
}

export function get<TKey extends keyof Config>(key: TKey) {
	const config = configCache || getConfig();
	return config[key];
}

export function getAll() {
	return getConfig();
}

export function initOpenAPIConfig() {
	const { url, token } = getAll();

	if (!url || !token) {
		console.error(
			pc.red("Invalid configuration file. Please authenticate again using the 'login' command."),
		);
		process.exit(1);
	}

	OpenAPI.BASE = `${url}/api`;
	OpenAPI.TOKEN = token;
	OpenAPI.HEADERS = {
		"x-api-key": token,
	};
}
