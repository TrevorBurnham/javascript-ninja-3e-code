//
// Listing 5.14: A function with an implicit return type in TypeScript
//

const capitalize = (str: string) =>
  str.length === 0 ? "" : str[0].toUpperCase() + str.slice(1);
const city = capitalize("seattle");

console.assert(city === "Seattle", "Seattle is capitalized");
