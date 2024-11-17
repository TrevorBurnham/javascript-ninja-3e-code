//
// Listing 5.8: Memoizing a function
//

function memoize(func) {
  const cache = new Map();
  return (arg) => {
    if (!cache.has(arg)) {
      cache.set(arg, func(arg));
    }
    return cache.get(arg);
  };
}

const memoizedIsPrime = memoize(isPrime);
console.assert(memoizedIsPrime(5), "5 is prime!");
