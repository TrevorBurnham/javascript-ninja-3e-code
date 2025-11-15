const ninjas = [];

ninjas.push("Kuma");
console.assert(
  ninjas[0] === "Kuma",
  "Kuma is the first item in the array",
);

ninjas.push("Hattori");
console.assert(ninjas[0] === "Kuma", "Kuma is still first");
console.assert(
  ninjas[1] === "Hattori",
  "Hattori is added to the end of the array",
);

ninjas.unshift("Yagyu");
console.assert(
  ninjas[0] === "Yagyu",
  "Now Yagyu is the first item",
);
console.assert(
  ninjas[1] === "Kuma",
  "Kuma moved to the second place",
);
console.assert(
  ninjas[2] === "Hattori",
  "And Hattori to the third place",
);

const poppedNinja = ninjas.pop();
console.assert(
  poppedNinja === "Hattori",
  "We've removed Hattori from the end of the array",
);
console.assert(
  ninjas[0] === "Yagyu",
  "Now Yagyu is still the first item",
);
console.assert(
  ninjas[1] === "Kuma",
  "Kuma is still in second place",
);

const shiftedNinja = ninjas.shift();
console.assert(
  shiftedNinja === "Yagyu",
  "We've removed Yagyu from the beginning of the array",
);
console.assert(
  ninjas[0] === "Kuma",
  "Kuma has shifted to the first place",
);
