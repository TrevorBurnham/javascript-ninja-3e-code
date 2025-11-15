const ninjas = [
  { name: "Yagyu", weapon: "shuriken" },
  { name: "Yoshi" },
  { name: "Kuma", weapon: "wakizashi" },
];

const ninjaWithWakizashi = ninjas.find((ninja) => {
  return ninja.weapon === "wakizashi";
});

console.assert(
  ninjaWithWakizashi?.name === "Kuma" &&
    ninjaWithWakizashi.weapon === "wakizashi",
  "Kuma is wielding a wakizashi",
);

const ninjaWithKatana = ninjas.find((ninja) => {
  return ninja.weapon === "katana";
});

console.assert(
  ninjaWithKatana === undefined,
  "We couldn't find a ninja that wields a katana",
);

const armedNinjas = ninjas.filter(
  (ninja) => "weapon" in ninja,
);

console.assert(
  armedNinjas[0].name === "Yagyu" &&
    armedNinjas[1].name === "Kuma",
  "Yagyu and Kuma are armed",
);
