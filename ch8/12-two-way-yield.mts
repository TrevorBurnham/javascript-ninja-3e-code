function* multiplier(): Generator<number, unknown, number> {
  let number = 1;
  while (true) {
    const multiplier = yield number;
    number *= multiplier;
  }
}

const multiplierGenerator = multiplier();
console.assert(multiplierGenerator.next().value === 1);
console.assert(multiplierGenerator.next(5).value === 5);
console.assert(multiplierGenerator.next(4).value === 20);
