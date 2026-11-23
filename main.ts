import { mkdirSync, writeFileSync } from "node:fs";

// One-line patch note for a bug in real life: the doorway effect.
// Walking through a doorway makes you forget why you entered the room.
const LINE =
  "v1.7.3: fixed a bug where crossing a doorway flushed the working-memory cache, dropping the reason you entered the room.";

function validateLine(line: string): void {
  const length = [...line].length;
  if (length < 1 || length > 160) {
    throw new Error(`line must be 1-160 characters, got ${length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

function writeEntry(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

validateLine(LINE);
writeEntry(LINE);
