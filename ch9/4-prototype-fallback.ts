const yoshi = { skulk: true };
const hattori = { sneak: true };
const kuma = { creep: true };

console.assert("skulk" in yoshi, "Yoshi can skulk");
console.assert(!("sneak" in yoshi), "Yoshi cannot sneak");
console.assert(!("creep" in yoshi), "Yoshi cannot creep");

Object.setPrototypeOf(yoshi, hattori);

console.assert("sneak" in yoshi, "Yoshi can now sneak");
console.assert(
  !("creep" in hattori),
  "Hattori cannot creep",
);

Object.setPrototypeOf(hattori, kuma);
console.assert("creep" in hattori, "Hattori can now creep");
console.assert("creep" in yoshi, "Yoshi can also creep");
