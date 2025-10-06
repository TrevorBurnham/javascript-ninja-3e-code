interface NinjaCollection {
  ninjas: string[];
  firstNinja: string;
}

const ninjaCollection = {
  ninjas: ["Yoshi", "Kuma", "Hattori"],
} as NinjaCollection;

Object.defineProperty(ninjaCollection, "firstNinja", {
  get() {
    console.log(`Getting firstNinja: ${this.ninjas[0]}`);
    return this.ninjas[0];
  },
  set(newNinja: string) {
    console.log(`Setting firstNinja: ${newNinja}`);
    this.ninjas[0] = newNinja;
  },
});
