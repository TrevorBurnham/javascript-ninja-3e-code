const ninjas = [
  { name: "Yoshi" },
  { name: "Yagyu" },
  { name: "Kuma" },
];

ninjas.sort((ninja1, ninja2) =>
  ninja1.name.localeCompare(ninja2.name),
);

console.assert(
  ninjas[0].name === "Kuma" &&
    ninjas[1].name === "Yagyu" &&
    ninjas[2].name === "Yoshi",
  "The ninjas are now in alphabetical order",
);
