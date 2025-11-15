const ninjas = ["Kuma", "Hattori", "Yagyu"];
const samurai = new Array("Oda", "Tomoe");

console.assert(
  ninjas.length === 3,
  "There are three ninjas",
);
console.assert(
  samurai.length === 2,
  "And only two samurai",
);

console.assert(
  ninjas[0] === "Kuma",
  "Kuma is the first ninja",
);
console.assert(
  samurai.at(-1) === "Tomoe",
  "Tomoe is the last samurai",
);

console.assert(
  ninjas[4] === undefined,
  "We get undefined if we try to access an out of bounds index",
);

ninjas[4] = "Ishi";
console.assert(
  ninjas.length === 5,
  "Arrays are automatically expanded",
);

ninjas.length = 2;
console.assert(
  ninjas.length === 2,
  "There are only two ninjas now",
);
console.assert(
  ninjas[0] === "Kuma" && ninjas[1] === "Hattori",
  "Kuma and Hattori",
);
console.assert(
  ninjas[2] === undefined,
  "But we've lost Yagyu",
);
