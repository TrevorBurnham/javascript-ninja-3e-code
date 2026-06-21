import { createServer } from "node:http";
import { once } from "node:events";

const server = createServer(async (req, res) => {
  console.assert(
    req.headers["content-type"] === "text/plain;charset=UTF-8",
    "fetch defaults to encoding strings as UTF-8",
  );
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(chunk as Buffer);
  }
  const body = Buffer.concat(chunks);
  const text = body.toString("utf8");
  console.assert(
    req.headers["content-length"] === `${body.length}`,
    "fetch sets content-length correctly",
  );
  res.end(`String length: ${text.length}, ` + `byte length: ${body.length}`);
});

server.listen(4567);
await once(server, "listening");

const body = "忍者の道"; // "The way of the ninja"

const res = await fetch("http://localhost:4567", {
  method: "POST",
  body,
});
const text = await res.text();

console.assert(
  text === "String length: 4, byte length: 12",
  "Our 4 characters occupy 12 bytes in UTF-8",
);

server.close();
