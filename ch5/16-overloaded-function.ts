//
// Listing 5.16: A function with overload signatures
//

function compare(a: string, b: string): number;
function compare(a: number, b: number): number;
function compare(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return a.localeCompare(b as string);
  } else {
    if (a === b) return 0;
    return a < (b as number) ? -1 : 1;
  }
}
