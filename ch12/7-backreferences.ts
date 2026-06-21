const doubledWordRegex = /\b([a-z]+) \1\b/i;
const report = "The ninja's heart went doki doki";
const found = report.match(doubledWordRegex);

if (found === null) {
  console.assert(false, "Match expected");
} else {
  const [match, word] = found;
  console.assert(
    match === "doki doki",
    "The full match is the doubled word 'doki doki'",
  );
  console.assert(
    word === "doki",
    "The capture group is the repeated word 'doki'",
  );
}
