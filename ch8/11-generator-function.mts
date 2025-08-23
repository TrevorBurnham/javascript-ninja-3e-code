function* randomNumbers() {
  while (true) {
    yield Math.random();
  }
}

const generator = randomNumbers();
const [num1, num2] = generator;
console.log(num1, num2);
