//
// Listing 5.15: A function with a single type signature that accepts multiple types
//

function compare(a: string | number, b: string | number) {
  if (typeof a === "string") {
    if (typeof b === "number") {
      throw new Error("Cannot compare a string to a number");
    }
    return a.localeCompare(b);
  } else {
    if (typeof b === "string") {
      throw new Error("Cannot compare a number to a string");
    }
    if (a === b) return 0;
    return a < b ? -1 : 1;
  }
}

console.assert(compare("a", "b") < 0, "a is less than b");
console.assert(compare(2, 1) > 0, "2 is greater than 1");
