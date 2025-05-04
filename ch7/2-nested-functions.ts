const outerValue = "samurai";
let func = () => {
  console.assert(false, "The original func should never be called.");
};

const outerFunction = () => {
  const innerValue = "ninja";

  const innerFunction = () => {
    console.assert(outerValue === "samurai", "I see the samurai.");
    console.assert(innerValue === "ninja", "I see the ninja.");
  };

  func = innerFunction;
};

outerFunction();
func();
