#!/usr/bin/env bun

import path from "node:path";
import fs from "node:fs/promises";
import { isError } from "../src/utils";

const rootDir = path.resolve(import.meta.dir, "../");
const tsconfigPath = path.resolve(rootDir, "tsconfig.json");
const mainEntryPath = path.resolve(rootDir, "src", "main.ts");
const outDir = path.resolve(rootDir, "bin");

console.log("Cleaning output directory...");
try {
  await fs.rm(outDir, { recursive: true });
} catch (error) {
  // Ignore error if directory does not exist
  if (isError(error, "ENOENT")) {
    // Do nothing
  } else {
    throw error;
  }
}

console.log("Building Dokploy CLI...");

await Bun.build({
  entrypoints: [mainEntryPath],
  outdir: outDir,
  target: "node",
  tsconfig: tsconfigPath,
});

console.log("Build completed!");
