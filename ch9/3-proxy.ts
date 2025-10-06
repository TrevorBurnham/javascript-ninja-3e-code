const emperor = { name: "Komei" };
const representative = new Proxy(emperor, {
  get: (target, key, receiver) => {
    return key in target
      ? Reflect.get(target, key, receiver)
      : "Don't bother the emperor!";
  },
  set: (target, key, value, receiver) => {
    if (!(key in target)) {
      console.warn("Setting this key is impermissible.");
      return false; // Reject the operation
    }
    return Reflect.set(target, key, value, receiver);
  },
});

console.assert(
  representative.name === "Komei",
  "We can get the name property through a proxy",
);

representative.name = "Tenno";
console.assert(
  emperor.name === "Tenno",
  "We can set the name property through a proxy",
);

console.assert(
  // @ts-expect-error -- The nickname property is not part of the object's type
  representative.nickname === "Don't bother the emperor!",
  "The proxy guards against improper gets",
);
