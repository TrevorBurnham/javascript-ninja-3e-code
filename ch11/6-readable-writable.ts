const ninjaKanji = "忍者";

const bytes = new TextEncoder().encode(ninjaKanji);
const splitAt = Math.floor(
  Math.random() * bytes.length,
);
const chunk1 = bytes.subarray(0, splitAt);
const chunk2 = bytes.subarray(splitAt);

const source = new ReadableStream({
  start(controller) {
    controller.enqueue(chunk1);
    controller.enqueue(chunk2);
    controller.close();
  },
});

const received: string[] = [];
const sink = new WritableStream<string>({
  write(text) {
    received.push(text);
  },
});

await source
  .pipeThrough(new TextDecoderStream())
  .pipeTo(sink);

console.assert(
  received.join("") === ninjaKanji,
  "TextDecoderStream correctly decodes across chunk boundaries",
);
