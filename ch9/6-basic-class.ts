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
}

const ninja = new Ninja("Yoshi", 4);

console.assert(
  ninja instanceof Ninja,
  "The Ninja class is a constructor",
);

console.assert(
  typeof Ninja.prototype.swingSword === "function",
  "Instance methods belong to a prototype object",
);

console.assert(
  ninja.swingSword() === true,
  "Each instance inherits prototype methods",
);

console.assert(
  Object.hasOwn(ninja, "name"),
  "Properties assigned in the constructor belong to the instance",
);
