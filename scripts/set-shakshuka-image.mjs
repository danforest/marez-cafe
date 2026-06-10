#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const source = process.argv[2];

if (!source) {
  console.error(
    "Usage: npm run set-shakshuka -- /path/to/your/shakshuka-photo.jpg",
  );
  process.exit(1);
}

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const destDir = resolve(root, "public/images/dishes");
const ext = extname(source).toLowerCase() || ".jpg";
const dest = resolve(destDir, `shakshuka-marez${ext}`);

if (!existsSync(source)) {
  console.error(`Source file not found: ${source}`);
  process.exit(1);
}

mkdirSync(destDir, { recursive: true });
copyFileSync(source, dest);
console.log(`Saved shakshuka photo to ${dest}`);
