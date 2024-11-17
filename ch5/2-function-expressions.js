//
// Listing 5.2: Function declarations and function expressions
//

function myFunctionDeclaration() {
  function innerFunction() {}
}

const myFunc = function () {};
myFunc(function () {
  return function () {};
});

(function namedFunctionExpression() {})();

+(function () {})();
-(function () {})();
!(function () {})();
~(function () {})();
