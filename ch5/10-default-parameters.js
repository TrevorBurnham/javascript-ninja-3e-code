//
// Listing 5.10: Using default parameters
//

function performAction(ninja, action = "skulking") {
  return ninja + " " + action;
}

console.assert(
  performAction("Fuma") === "Fuma skulking",
  "The default value is used for Fuma",
);

console.assert(
  performAction("Yoshi") === "Yoshi skulking",
  "The default value is used for Yoshi",
);

console.assert(
  performAction("Hattori") === "Hattori skulking",
  "The default value is used for Hattori",
);

console.assert(
  performAction("Yagyu", "sneaking") === "Yagyu sneaking",
  "Yagyu can do whatever he pleases, even sneak!",
);
