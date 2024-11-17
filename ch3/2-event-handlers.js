//
// Listing 3.2: Registering event handlers
//

document.addEventListener("DOMContentLoaded", () => {
  appendToEventList('Event "DOMContentLoaded" fired');
});

document.addEventListener("keydown", (evt) => {
  appendToEventList(`Event "keydown" fired with key = "${evt.key}"`);
});
