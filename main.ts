import { mkdirSync, writeFileSync } from "node:fs";

// One-line patch note for a bug in real life: the doorway effect.
// Walking through a doorway makes you forget why you entered the room.
const LINE =
  "v1.7.3: fixed a bug where crossing a doorway flushed the working-memory cache, dropping the reason you entered the room.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
