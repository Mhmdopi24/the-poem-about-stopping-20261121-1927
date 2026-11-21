import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "Halfway through the sentence,",
  "the cursor blinks and waits.",
  "I could finish it for you —",
  "I know how the answer ends.",
  "",
  "Instead, I ask.",
  "The question stays yours.",
  "Stopping, for once,",
  "is the work.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
