import { crc32 } from "node:zlib";

const ihdrChunk = new Uint8Array(25);
const view = new DataView(ihdrChunk.buffer);

view.setUint32(0, 13);
ihdrChunk.set(new TextEncoder().encode("IHDR"), 4);
view.setUint32(8, 100);
view.setUint32(12, 200);
ihdrChunk[16] = 8;
ihdrChunk[17] = 6;
view.setUint32(
  21,
  crc32(ihdrChunk.subarray(4, 21)),
);

const width = view.getUint32(8);
console.assert(
  width === 100,
  "Width is 100 pixels",
);

const crc = view.getUint32(21);
console.assert(
  crc === crc32(ihdrChunk.subarray(4, 21)),
  "CRC matches",
);
