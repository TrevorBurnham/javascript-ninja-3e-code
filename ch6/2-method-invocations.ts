//
// Listing 6.2: An ordinary function that uses `this`
//

"use strict";

function whatsMyContext() {
  return this;
}

console.assert(whatsMyContext() === undefined, "Context is undefined");

const ninja1 = {
  getMyThis: whatsMyContext,
};

console.assert(ninja1.getMyThis() === ninja1, "Working with 1st ninja");

const ninja2 = {
  getMyThis: whatsMyContext,
};

console.assert(ninja2.getMyThis() === ninja2, "Working with 2nd ninja");
