//
// Listing 5.5: Storing a collection of unique functions
//

let count = 0;

const increment = () => {
  count++;
};

const funcSet = new Set();
funcSet.add(increment);
funcSet.add(increment);

funcSet.forEach((func) => func());
console.assert(count === 1, "The function was only added to the set once");
