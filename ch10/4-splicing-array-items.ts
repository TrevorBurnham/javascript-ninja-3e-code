const ninjas = ["Yagyu", "Kuma", "Hattori", "Fuma"];

let removedItems = ninjas.splice(1, 1);

console.assert(
  removedItems.length === 1,
  "One item was removed",
);
console.assert(removedItems[0] === "Kuma");
console.assert(
  ninjas.length === 3,
  "There are now three items in the array",
);
console.assert(
  ninjas[2] === "Fuma",
  "And Fuma is now the third item",
);

removedItems = ninjas.splice(
  1,
  2,
  "Mochizuki",
  "Yoshi",
  "Momochi",
);

console.assert(
  removedItems.length === 2,
  "We've just removed two items",
);
console.assert(
  ninjas.length === 4,
  "There are now four items in the array",
);
console.assert(
  ninjas[0] === "Yagyu",
  "Yagyu is still here",
);
console.assert(
  ninjas[1] === "Mochizuki" &&
    ninjas[2] === "Yoshi" &&
    ninjas[3] === "Momochi",
  "The new ninjas were added after Yagyu",
);
