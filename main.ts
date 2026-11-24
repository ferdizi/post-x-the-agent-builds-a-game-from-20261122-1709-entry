// main.ts — PULSE JUMP entry program (Node 22, standard library only).
// It copies POST.json from the repository root to /output/POST.json,
// where the gate reads it. That is all it has to do: the entry is the
// post itself — a short video about an AI agent building this game from
// one prompt, posted natively on X, ending with make.fun's referral
// end card. The house reads the post's views and interactions from X;
// nothing this program writes about the post is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
// Read POST.json first so a malformed file fails here with a clear
// message instead of a half-copied output.
const src = join(BOT_DIR, "POST.json");
const parsed = JSON.parse(readFileSync(src, "utf8")) as { url?: unknown };
if (typeof parsed.url !== "string" || !/^https:\/\/(x\.com|twitter\.com|www\.x\.com|mobile\.twitter\.com)\//.test(parsed.url)) {
  console.error("POST.json holds no X post address: " + JSON.stringify(parsed));
  process.exit(1);
}
const dest = join(OUTPUT_DIR, "POST.json");
try {
  copyFileSync(src, dest);
} catch (err) {
  console.error("POST.json could not be copied from " + BOT_DIR + ": " + (err as Error).message);
  process.exit(1);
}
console.log("wrote " + dest + " for " + parsed.url);
