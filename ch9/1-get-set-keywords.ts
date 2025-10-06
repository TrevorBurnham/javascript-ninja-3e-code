const ninjaCollection = {
  ninjas: ["Yoshi", "Kuma", "Hattori"],
  get firstNinja() {
    console.log(`Getting firstNinja: ${this.ninjas[0]}`);
    return this.ninjas[0];
  },
  set firstNinja(newNinja: string) {
    console.log(`Setting firstNinja: ${newNinja}`);
    this.ninjas[0] = newNinja;
  },
};

console.assert(
  ninjaCollection.firstNinja === "Yoshi",
  "Yoshi is the first ninja",
);

ninjaCollection.firstNinja = "Hachi";

console.assert(
  ninjaCollection.firstNinja === "Hachi" &&
    ninjaCollection.ninjas[0] === "Hachi",
  "Now Hachi is the first ninja",
);
