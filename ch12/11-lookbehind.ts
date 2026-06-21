const trailingLetterRegex = /(?<=\w)\w/g;

const ninja = "Hattori Sato";
const wantedPoster = ninja.replace(
  trailingLetterRegex,
  "*",
);

console.assert(
  wantedPoster === "H****** S***",
  "Only the first letter of each name is shown",
);
