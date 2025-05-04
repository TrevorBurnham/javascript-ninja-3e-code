const outerValue = "ninja";
const outerFunction = () => {
  console.assert(outerValue === "ninja", "I see the ninja.");
};
outerFunction();
