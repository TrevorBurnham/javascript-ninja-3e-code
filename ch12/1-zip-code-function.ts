const isZipCode = (candidate: string) => {
  if (candidate.length !== 10) return false;
  const stringEntries =
    Array.from(candidate).entries();
  for (const [index, char] of stringEntries) {
    if (index === 5) {
      if (char !== "-") return false;
    } else {
      if (char < "0" || char > "9") return false;
    }
  }
  return true;
};
const pattern = new RegExp("\d");

console.assert(
  isZipCode("12345-6789") === true,
  "12345-6789 is a valid ZIP code.",
);
console.assert(
  isZipCode("123456789-") === false,
  "123456789- is not a valid ZIP code.",
);
