//
// Listing 2.1: A calculator program in Node.js
//

import * as readlinePromises from "node:readline/promises";
import { stdin, stdout } from "node:process";

const rl = readlinePromises.createInterface({
  input: stdin,
  output: stdout,
});

while (true) {
  const input = await rl.question('Enter expression or ".exit":\n> ');
  if (input === ".exit") {
    rl.close();
    break;
  } else {
    console.log(eval(input));
  }
}
