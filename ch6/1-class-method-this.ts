//
// Listing 6.1: A class with methods that use `this`
//

class Ninja {
  #skillLevel = 0;

  train() {
    this.#skillLevel++;
  }

  get skillLevel() {
    return this.#skillLevel;
  }
}

const ninja = new Ninja();
console.assert(ninja.skillLevel === 0, "New ninja has skill level 0");
ninja.train();
console.assert(ninja.skillLevel === 1, "Skill level improves with training");
