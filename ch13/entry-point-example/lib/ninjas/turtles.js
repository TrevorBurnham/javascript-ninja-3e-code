const turtles = [
  "Leonardo",
  "Donatello",
  "Raphael",
  "Michelangelo",
];

export const getRandomTurtle = () =>
  turtles[Math.floor(Math.random() * 4)];
