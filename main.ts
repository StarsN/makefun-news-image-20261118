// Entry point: render the 18 November 2026 front page and write entry.png.
// Deterministic: no clock, no randomness, no network. Run twice -> same bytes.
// Usage: MAKEFUN_OUTPUT_DIR=out node main.ts
// (Node 22+ can run TypeScript directly; only node built-ins are used.)

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { renderFrontPage } from "./src/scene.ts";
import { encodePng } from "./src/png.ts";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? (existsSync("/output") ? "/output" : "out");
mkdirSync(outDir, { recursive: true });

const canvas = renderFrontPage();
const png = encodePng(canvas.w, canvas.h, canvas.px);
const target = join(outDir, "entry.png");
writeFileSync(target, png);
console.log(`wrote ${target} (${png.length} bytes)`);
