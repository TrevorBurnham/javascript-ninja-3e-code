//
// Listing 5.17: An arrow function with overload signatures
//

type CompareFunction = {
  (a: string, b: string): number;
  (a: number, b: number): number;
};

const compare: CompareFunction = (a: string | number, b: string | number) => {
  if (typeof a === "string") {
    return a.localeCompare(b as string);
  } else {
    if (a === b) return 0;
    return a < (b as number) ? -1 : 1;
  }
};
