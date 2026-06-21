const armedNinjaRegex =
  /[A-Z][a-z]+(?=.*(katana|shuriken))/g;
const getArmedNinjaNames = (str: string) =>
  [...str.matchAll(armedNinjaRegex)].map(
    (found) => found[0],
  );

const armedNinjaNames = [
  "Hattori carrying a katana",
  "Yuri and Eri carry a shuriken",
  "Kenji carrying a rice ball",
].flatMap(getArmedNinjaNames);

console.assert(
  armedNinjaNames.includes("Hattori"),
  "Hattori is an  armed ninja",
);
console.assert(
  armedNinjaNames.includes("Yuri"),
  "Yuri is an  armed ninja",
);
console.assert(
  armedNinjaNames.includes("Eri"),
  "Eri is an  armed ninja",
);
console.assert(
  armedNinjaNames.length === 3,
  "There are no other armed ninjas",
);
