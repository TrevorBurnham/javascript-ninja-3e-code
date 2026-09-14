export const lazyGetRandomTurtle = async () => {
  const { getRandomTurtle } =
    await import("./ninjas/turtles.js");
  return getRandomTurtle();
};
