const kebabCaseRegex = /-([a-z])/g;
const technique = "shadow-clone-jutsu";
const camelCase = technique.replace(
  kebabCaseRegex,
  (_, letter: string) => letter.toUpperCase(),
);

console.assert(
  camelCase === "shadowCloneJutsu",
  "The kebab-case string becomes 'shadowCloneJutsu'",
);
