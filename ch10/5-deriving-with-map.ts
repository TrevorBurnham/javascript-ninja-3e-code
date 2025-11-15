const ninjas = [
  { name: "Yagyu", weapon: "shuriken" },
  { name: "Yoshi", weapon: "katana" },
  { name: "Kuma", weapon: "wakizashi" },
];

const weapons = ninjas.map(({ weapon }) => weapon);
console.assert(
  weapons[0] === "shuriken" &&
    weapons[1] === "katana" &&
    weapons[2] === "wakizashi",
  "Every ninja's weapon is included",
);
