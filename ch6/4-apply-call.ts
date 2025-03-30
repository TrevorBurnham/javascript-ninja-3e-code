//
// Listing 6.4: Using `apply` and `call` to control `this`
//

function juggle(...numbers: number[]) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  this.result = result;
}

const ninja1 = { result: 0 };
const ninja2 = { result: 0 };

juggle.apply(ninja1, [1, 2, 3, 4]);
juggle.call(ninja2, 5, 6, 7, 8);

console.assert(ninja1.result === 10, "juggled via apply");
console.assert(ninja2.result === 26, "juggled via call");
