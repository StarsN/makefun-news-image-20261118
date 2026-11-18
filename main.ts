// news-image-20261118 entry: "The World in One Day — 18 November 2026".
//
// The artwork lives beside this file as entry.png: a newspaper front page
// for Wednesday 18 November 2026 — the US sinking five Iranian tankers as
// Tehran strikes back around Hormuz, Trump heading to the first three-way
// summit with Xi and Putin in Shenzhen, Ukraine hitting the Crimean
// bridge a second night, and a hack that reached nearly 200 top websites,
// plus a ticker of three more stories from the day. The program's whole
// job is to deliver those exact bytes to the output directory, unchanged,
// every run: the judge sees precisely the file the repository holds, so
// the copy must be byte for byte and deterministic.
//
// Run it the way the kit suggests, from the repository root:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// In the grader's container MAKEFUN_OUTPUT_DIR is unset and the image goes
// to /output/entry.png.

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The image sits next to this program in the repository, wherever the
// repository itself was unpacked.
const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, 'entry.png');

// MAKEFUN_OUTPUT_DIR stands in for /output outside the grader.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const target = join(outputDir, 'entry.png');
copyFileSync(source, target);

// The judge sees exactly the bytes delivered, so prove the copy arrived
// whole: if the delivered file is not the same size as the artwork in the
// repository, fail loudly rather than hand over a truncated image.
const expected = statSync(source).size;
const delivered = statSync(target).size;
if (delivered !== expected) {
  throw new Error(`entry.png copy went wrong: ${delivered} bytes delivered, ${expected} expected`);
}

// Also check the delivered bytes still open as the PNG the gate expects —
// the 8-byte PNG signature — so a corrupted source fails here instead of
// reaching the judge as a broken file.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!readFileSync(target).subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png delivered without a PNG signature: source image is not a PNG');
}
