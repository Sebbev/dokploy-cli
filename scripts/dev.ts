#!/usr/bin/env bun

import fs from "node:fs";
import path from "node:path";

const rootDir = path.resolve(import.meta.dir, "../");
const srcDir = path.resolve(rootDir, "src");

let lock = false;

console.clear();
await Bun.$`bun run build`;
console.log(`Watching for changes in ${srcDir}...`);
const watcher = fs.watch(
  srcDir,
  { recursive: true },
  async (event, filename) => {
    if (lock) {
      return;
    }

    try {
      lock = true;
      await Bun.$`bun run build`;
      lock = false;
    } catch (error) {
      console.error("Build failed:", error);
    }
  }
);

process.on("SIGINT", () => {
  // close watcher when Ctrl-C is pressed
  console.log("Closing watcher...");
  watcher.close();

  process.exit(0);
});
