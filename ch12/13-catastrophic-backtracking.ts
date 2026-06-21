const rosterRegex = /^(?:\w+\s*)+$/;

console.assert(
  rosterRegex.test("Hattori Yoshi Fuma"),
  "A genuine roster is accepted instantly",
);

const attack =
  "I will erase your existence from this realm!";
const start = performance.now();
rosterRegex.test(attack);
const elapsed = performance.now() - start;
console.log(
  `Rejecting the attack string took ${elapsed.toFixed(0)}ms`,
);
