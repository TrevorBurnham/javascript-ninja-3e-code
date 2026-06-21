import { setTimeout } from "node:timers/promises";

const totalChunks = 100;
const flushInterval = 10;

function createSource() {
  let remaining = totalChunks;
  return new ReadableStream<number>({
    async pull(controller) {
      await setTimeout(0);
      controller.enqueue(remaining);
      if (--remaining === 0) controller.close();
    },
  });
}

async function timeWithHighWaterMark(
  highWaterMark: number,
) {
  let count = 0;
  const sink = new WritableStream<number>(
    {
      async write() {
        if (++count % flushInterval === 0) {
          await setTimeout(10);
        }
      },
    },
    { highWaterMark },
  );

  const start = performance.now();
  await createSource().pipeTo(sink);
  return Math.round(performance.now() - start);
}

const time1 = await timeWithHighWaterMark(1);
const time10 = await timeWithHighWaterMark(10);

console.log(`highWaterMark 1: ${time1}ms`);
console.log(`highWaterMark 10: ${time10}ms`);
console.assert(
  time10 < time1,
  "Higher highWaterMark, higher throughput",
);
