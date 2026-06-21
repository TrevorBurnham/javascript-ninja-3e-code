const ihdrData = new Uint8Array(13);
ihdrData[8] = 8;
ihdrData[9] = 6;

const chunkLength = new Uint8Array([0, 0, 0, 13]);
const chunkType = new TextEncoder().encode("IHDR");
const dummyCrc = new Uint8Array(4);

const ihdrChunk = new Uint8Array([
  ...chunkLength,
  ...chunkType,
  ...ihdrData,
  ...dummyCrc,
]);

console.assert(
  ihdrChunk[16] === 8,
  "Bit depth is 8",
);
console.assert(
  ihdrChunk[17] === 6,
  "Color type 6 means RGBA",
);

const type = String.fromCharCode(
  ...ihdrChunk.subarray(4, 8),
);
console.assert(
  type === "IHDR",
  "Chunk type is IHDR",
);
