const realStrikeRegex = /(?<!not\s+)strike/gi;

const orders =
  "Strike at dawn, but do not strike at dusk";
const shouted = orders.replace(
  realStrikeRegex,
  (command) => command.toUpperCase(),
);

console.assert(
  shouted ===
    "STRIKE at dawn, but do not strike at dusk",
  "Only the order that is not negated is shouted",
);

console.log(
  realStrikeRegex.test("not just any strike"),
);
