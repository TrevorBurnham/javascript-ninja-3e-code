import * as characters from "./4-default-export.ts";

console.assert(
  characters.default === "Ranma",
  "The default export is Ranma",
);
console.assert(
  Object.keys(characters).length === 3,
  "All 3 exports are included in the namespace",
);
