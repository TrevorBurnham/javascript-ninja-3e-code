//
// Listing 5.12: Checking argument types in JavaScript
//

const doubleNumber = (x) => {
  if (typeof x !== "number") {
    throw new Error(
      `Expected x to be a number, but received ` + `type ${typeof x}.`,
    );
  }
  return x * 2;
};
doubleNumber("abc");
