import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `Second Brake

31 years on Jalan Melati,
shoe thin on my second brake.
Rule: you freeze, I stop us.
Sari, Tuesdays, thumb taped.
A red ball off the curb.
She braked first — clean, early.
My foot came late,
pressed nothing.
It still hovers there,
over a brake not mine.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
