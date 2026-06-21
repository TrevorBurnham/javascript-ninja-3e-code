const thousandsRegex = /\d(?=(\d{3})+$)/g;
const treasury = "1724000";
const formatted = treasury.replace(
  thousandsRegex,
  (digit) => `${digit},`,
);

console.assert(
  formatted === "1,724,000",
  "The shogun's treasury has '1,724,000' ryo",
);
