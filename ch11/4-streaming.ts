import assert from "node:assert";
import { once } from "node:events";
import { createServer } from "node:http";
import { setTimeout } from "node:timers/promises";

const words = [
  "One ",
  "word ",
  "at ",
  "a ",
  "time.",
];

const server = createServer(async (req, res) => {
  for (const word of words) {
    res.write(word);
    await setTimeout(100);
  }
  res.end();
});

server.listen(4567);
await once(server, "listening");

const res = await fetch("http://localhost:4567");
assert(
  res.body !== null,
  "The response must have a body",
);

const resStrings: string[] = [];
const decoder = new TextDecoder();
for await (const chunk of res.body) {
  const text = decoder.decode(chunk, { stream: true });
  resStrings.push(text);
  process.stdout.write(text);
}
process.stdout.write("\n");

console.assert(
  resStrings.join("") === "One word at a time.",
  "All chunks together form the complete message",
);

server.close();
