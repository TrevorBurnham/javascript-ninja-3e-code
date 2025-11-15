const ninjas = ["Yagyu", "Kuma", "Hattori"];
delete ninjas[1];

console.assert(
  ninjas.length === 3,
  "Length still reports that there are 3 items",
);
console.assert(
  ninjas[0] === "Yagyu",
  "First item is Yagyu",
);
console.assert(
  ninjas[1] === undefined,
  "Second item is empty",
);
console.assert(
  ninjas[2] === "Hattori",
  "Third item is Hattori",
);
