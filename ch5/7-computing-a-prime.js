//
// Listing 5.7: Computing a prime number
//

const isPrime = (value) => {
  if (value === 0 || value === 1) {
    return false; // 0 and 1 are not prime
  }

  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
};

console.assert(isPrime(5), "5 is prime!");
