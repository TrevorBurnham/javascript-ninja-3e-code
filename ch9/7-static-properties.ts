class Ninja {
  name: string;
  level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }

  swingSword() {
    return true;
  }

  static compare(ninja1: Ninja, ninja2: Ninja) {
    return ninja1.level - ninja2.level;
  }
}

const ninja1 = new Ninja("Yoshi", 4);
const ninja2 = new Ninja("Hattori", 3);

console.assert(
  Ninja.compare(ninja1, ninja2) > 0,
  "The Ninja class can compare two ninjas",
);
