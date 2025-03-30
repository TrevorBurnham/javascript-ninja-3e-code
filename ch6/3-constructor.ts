//
// Listing 6.3: An ordinary function that's used as a constructor
//

function Ninja() {
  this.skulk = function () {
    return this;
  };
}

const ninja1 = new Ninja();
const ninja2 = new Ninja();

console.assert(ninja1.skulk() === ninja1, "The 1st ninja is skulking");
console.assert(ninja2.skulk() === ninja2, "The 2nd ninja is skulking");
