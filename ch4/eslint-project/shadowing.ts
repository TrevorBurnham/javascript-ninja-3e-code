const count = 10;

console.log("Outer count:", count);

for (let count = 0; count < 3; count++) {
  console.log("Inner loop count:", count);
}

console.log("Outer count still:", count);
