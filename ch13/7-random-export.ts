const rollDice = () => {
  const roll1 = Math.ceil(Math.random() * 6);
  const roll2 = Math.ceil(Math.random() * 6);
  lastDiceRoll = roll1 + roll2;
  return lastDiceRoll;
};
let lastDiceRoll = -1;

export { rollDice, lastDiceRoll };
