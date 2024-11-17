//
// Listing 5.9: Using rest parameters
//

function multiMax(first, ...remainingNumbers) {
  const sorted = remainingNumbers.sort((a, b) => {
    return b - a;
  });
  return first * sorted[0];
}
console.assert(multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)");
