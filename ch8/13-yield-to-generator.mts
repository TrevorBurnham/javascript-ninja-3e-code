function* warriors() {
  yield "Sun Tzu";
  yield* ninjas();
  yield "Genghis Khan";
}

function* ninjas() {
  yield "Hattori";
  yield "Yoshi";
}

for (let warrior of warriors()) {
  console.log(warrior);
}
