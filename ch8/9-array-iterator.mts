const numbers = [1, 2, 3];
const iterator = numbers[Symbol.iterator]();

let iteratorResult = iterator.next();
while (!iteratorResult.done) {
  console.log(iteratorResult.value);
  iteratorResult = iterator.next();
}
