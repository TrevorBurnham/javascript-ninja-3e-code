//
// Listing 5.11: Referencing previous parameters from a default
//

function performAction(
  ninja,
  action = "skulking",
  message = ninja + " " + action,
) {
  return message;
}

console.assert(
  performAction("Yoshi") === "Yoshi skulking",
  "Yoshi is skulking",
);
