class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance() {
    return true;
  }
}

class Ninja extends Person {
  sneakiness: number;

  constructor(name: string, sneakiness = 3) {
    super(name);
    this.sneakiness = sneakiness;
  }

  sneak() {
    return `Sneak level ${this.sneakiness}`;
  }
}

const ninja = new Ninja("Chizu", 5);

console.assert(
  ninja instanceof Ninja,
  "A ninja is a ninja",
);

console.assert(
  ninja instanceof Person,
  "A ninja is also a person",
);
