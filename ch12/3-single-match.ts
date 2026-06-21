const powerLevel = "It's over 9000!";
const found = powerLevel.match(/\d+/);
console.assert(
  found?.[0] === "9000",
  "The numeric substring is 9000.",
);
