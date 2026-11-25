import { mkdirSync, writeFileSync } from "node:fs";

// Midnight Fridge Roast: one line, spoken at the fridge door at 2 a.m.
// The fridge locked itself like a nightclub bouncer, and the guest list
// is the joke: the leftovers are not on it, and neither are you.
// The file holds exactly the roast, no trailing newline, so the sealed
// gate reads one line of 1-200 characters and nothing else.
const LINE =
  "It's 2 a.m. and the fridge locked itself like a nightclub bouncer: 'The leftovers aren't on the list tonight, and neither are you.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
