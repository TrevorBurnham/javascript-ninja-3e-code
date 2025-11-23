const ninjas = new Set([
  "Kuma",
  "Hattori",
  "Yagyu",
  "Hattori",
]);

console.assert(
  ninjas.has("Hattori"),
  "Hattori is in our set",
);
console.assert(
  ninjas.size === 3,
  "There are only three ninjas in our set!",
);

ninjas.add("Yoshi");
console.assert(ninjas.has("Yoshi"), "Yoshi is added");
console.assert(
  ninjas.size === 4,
  "There are four ninjas in our set!",
);

console.assert(ninjas.has("Kuma"), "Kuma is already added");
ninjas.add("Kuma");
console.assert(
  ninjas.size === 4,
  "Adding Kuma again has no effect",
);

for (let ninja of ninjas) {
  console.assert(ninja !== null, ninja);
}
