interface Ninja {
  name: string;
}

interface NinjaMetadata {
  homeIsland: string;
}

const ninja1 = { name: "Yoshi" };
const ninja2 = { name: "Hattori" };
const ninja3 = { name: "Kuma" };

const ninjaMetadataMap = new Map<Ninja, NinjaMetadata>();

ninjaMetadataMap.set(ninja1, { homeIsland: "Honshu" });
ninjaMetadataMap.set(ninja2, { homeIsland: "Hokkaido" });

console.assert(
  ninjaMetadataMap.get(ninja1)?.homeIsland === "Honshu" &&
    ninjaMetadataMap.get(ninja2)?.homeIsland === "Hokkaido",
  "The first two ninjas have metadata",
);
console.assert(
  ninjaMetadataMap.get(ninja3) === undefined,
  "There is no mapping for the third ninja",
);
console.assert(
  ninjaMetadataMap.size === 2,
  "We've created two mappings",
);

ninjaMetadataMap.delete(ninja1);
console.assert(
  !ninjaMetadataMap.has(ninja1) &&
    ninjaMetadataMap.size === 1,
  "There's no first ninja mapping anymore!",
);

ninjaMetadataMap.clear();
console.assert(
  ninjaMetadataMap.size === 0,
  "All mappings have been cleared",
);
