import { lazyGetRandomTurtle } from "entry-point-example";
import { getRandomTurtle } from "entry-point-example/ninjas/turtles";

console.log(getRandomTurtle());
console.log(await lazyGetRandomTurtle());
