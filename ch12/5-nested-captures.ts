const ninjaTitleRegex = /(\S+)(?: of (\S+))?/;
const ninjaTitle = "Hattori of Iga";
// const found = ninjaTitle.match(ninjaTitleRegex);

// if (found === null) {
//   console.assert(false, "Match expected");
// } else {
//   const [match, name, clan] = found;
//   console.assert(
//     match === "Hattori of Iga",
//     "The full match is 'Hattori of Iga'",
//   );
//   console.assert(
//     name === "Hattori",
//     "The first capture group is 'Hattori'",
//   );
//   console.assert(
//     clan === "Iga",
//     "The second capture group is 'Iga'",
//   );
// }

const [_, name, clan] = "Yoshi".match(
  ninjaTitleRegex,
);
console.log(name, clan);
