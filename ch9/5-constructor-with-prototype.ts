function Ninja() {}

Ninja.prototype.swingSword = () => true;

// @ts-expect-error -- Ninja has no construct signature
const ninja = new Ninja();
console.assert(
  ninja.swingSword() === true,
  "swingSword is inherited from the prototype.",
);
console.assert(
  ninja instanceof Ninja,
  "instanceof confirms that ninja is a Ninja",
);
