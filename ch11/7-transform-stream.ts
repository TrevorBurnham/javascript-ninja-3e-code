import { setTimeout } from "node:timers/promises";

const facts = [
  "Leonardo leads.",
  "Donatello does machines.",
];

const source = new ReadableStream<string>({
  async start(controller) {
    for (const fact of facts) {
      controller.enqueue(fact);
      await setTimeout(100);
    }
    controller.close();
  },
});

const wordTransform = new TransformStream<
  string,
  string
>({
  transform(fact, controller) {
    for (const word of fact.split(" ")) {
      controller.enqueue(word);
    }
  },
});

const words: string[] = [];
const sink = new WritableStream<string>({
  write(word) {
    words.push(word);
  },
});

await source
  .pipeThrough(wordTransform)
  .pipeTo(sink);

console.assert(
  words.length === 5,
  "Two sentences became five words",
);
console.assert(
  words.join(" ") ===
    "Leonardo leads. Donatello does machines.",
  "The words join back into the original text",
);
