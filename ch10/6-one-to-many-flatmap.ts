const ninjas = [
  { name: "Yagyu", weapons: ["shuriken", "kunai"] },
  { name: "Yoshi", weapons: [] },
  { name: "Kuma", weapons: ["katana", "tanto"] },
];

const weapons = ninjas.flatMap(({ weapons }) => weapons);
console.assert(
  weapons[0] === "shuriken" &&
    weapons[1] === "kunai" &&
    weapons[2] === "katana" &&
    weapons[3] === "tanto",
  "All ninja weapons are included",
);
