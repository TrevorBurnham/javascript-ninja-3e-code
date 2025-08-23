const randomNumbers: Iterable<number> = {
  [Symbol.iterator]: () => ({
    next: () => ({ value: Math.random() }),
  }),
};

const [num1, num2] = randomNumbers;
console.log(num1, num2);
