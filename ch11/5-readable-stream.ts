import { setTimeout } from "node:timers/promises";

const ninjas = [
  "Leonardo",
  "Donatello",
  "Raphael",
  "Michelangelo",
];

const source = new ReadableStream<string>({
  async start(controller) {
    for (const ninja of ninjas) {
      controller.enqueue(ninja);
      await setTimeout(100);
    }
    controller.close();
  },
});

const received: string[] = [];
for await (const ninja of source) {
  received.push(ninja);
}

console.assert(
  received.length === 4,
  "Four ninjas were received",
);
