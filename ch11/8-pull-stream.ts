import { setTimeout } from "node:timers/promises";

function createFibonacciStream(count: number) {
  let a = 0;
  let b = 1;
  let remaining = count;
  return new ReadableStream<number>({
    pull(controller) {
      controller.enqueue(a);
      [a, b] = [b, a + b];
      if (--remaining === 0) controller.close();
    },
  });
}

const first10: number[] = [];
for await (const n of createFibonacciStream(10)) {
  first10.push(n);
  await setTimeout(0);
}

console.assert(
  first10.join(", ") ===
    "0, 1, 1, 2, 3, 5, 8, 13, 21, 34",
  "First 10 Fibonacci numbers",
);
