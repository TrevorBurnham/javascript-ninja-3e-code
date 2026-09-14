import {
  homeIsland,
  getOccupation as getTitle,
} from "./1-export-syntax.ts";

console.assert(
  homeIsland === "Tsushima",
  "The home island is Tsushima",
);
console.assert(
  getTitle("Yotei") === "Ghost of Yotei",
  "The protector of Yotei is a ghost",
);
