const ninjaRoster =
  "Hattori of Iga, Yoshi of Koga, Fuma of Hojo";
const titleRegex = /([^\s,]+) of ([^\s,]+)/g;

for (const found of ninjaRoster.matchAll(
  titleRegex,
)) {
  const [, name, clan] = found;
  console.log(
    `${name} hails from the ${clan} clan`,
  );
}
