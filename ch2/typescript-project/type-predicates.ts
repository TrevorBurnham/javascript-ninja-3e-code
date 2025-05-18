const stringOrNumber = ["str", 123][0]; // type: string | number
const isString = (x: unknown) => typeof x === "string";
const isShortString = (x: unknown) => {
  return typeof x === "string" && x.length <= 3;
};

if (typeof stringOrNumber === "string") {
  stringOrNumber satisfies string; // assertion passes
}

if (isString(stringOrNumber)) {
  stringOrNumber satisfies string; // assertion passes
}

if (isShortString(stringOrNumber)) {
  stringOrNumber as string;
  stringOrNumber satisfies string; // assertion fails!
}
