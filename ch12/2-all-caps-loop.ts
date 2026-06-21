const cities = ["Kyoto", "Tokyo", "Osaka"];

for (const city of cities) {
  console.assert(
    /o$/.test(city),
    `Expected name ending in "o", but got "${city}".`,
  );
}
