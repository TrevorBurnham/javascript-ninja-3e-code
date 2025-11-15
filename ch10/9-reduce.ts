const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(
  (acc, number) => acc + number,
  0,
);

console.assert(sum === 10, "The sum of all numbers is 10");
