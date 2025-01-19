const pluralize = (str, count) => (count === 1 ? str : `${str}s`);

console.assert(
  pluralize("egg", 1) === "egg",
  "pluralize returns the original string when count is 1",
);
console.assert(
  pluralize("egg", 2) === "eggs",
  "pluralize appends 's' when count is 2",
);
