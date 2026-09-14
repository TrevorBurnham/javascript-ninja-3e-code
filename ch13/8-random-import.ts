import {
  lastDiceRoll,
  rollDice,
} from "./7-random-export.ts";

for (let i = 0; i < 3; i++) {
  rollDice();
  console.log(lastDiceRoll);
}
