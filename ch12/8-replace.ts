const kebabCaseRegex = /-([a-z])/g;
const technique = "shadow-clone-jutsu";
const camelCase = technique.replace(
  kebabCaseRegex,
  (_, letter) => letter.toUpperCase(),
);

console.assert(
  camelCase === "shadowCloneJutsu",
  "The kebab-case string becomes 'shadowCloneJutsu'",
);

const kebabCaseRegex2 = /(?<=[a-z])-([a-z])/g;
console.log(
  "-module--kebab-case".match(kebabCaseRegex2),
);
