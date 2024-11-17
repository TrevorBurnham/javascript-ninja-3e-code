//
// Listing 5.3: Comparing an arrow function and a function expression
//

const greet = (name) => "Greetings " + name;
console.assert(
  greet("Oishi") === "Greetings Oishi",
  "Oishi is properly greeted",
);

const anotherGreet = function (name) {
  return "Greetings " + name;
};
console.assert(
  anotherGreet("Oishi") === "Greetings Oishi",
  "Again, Oishi is properly greeted",
);
