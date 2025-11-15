import { enableMapSet, produce } from "immer";

enableMapSet();

interface NinjaMetadata {
  homeIsland: string;
}

type NinjaState = Readonly<{
  ninjas: ReadonlyArray<string>;
  ninjaMetadata: ReadonlyMap<string, NinjaMetadata>;
  lastModified: number;
}>;

const initialState: NinjaState = {
  ninjas: ["Kuma", "Hattori", "Yagyu"],
  ninjaMetadata: new Map(
    Object.entries({
      Kuma: { homeIsland: "Honshu" },
      Hattori: { homeIsland: "Hokkaido" },
    }),
  ),
  lastModified: Date.now(),
};

const getStateWithNewNinja = (
  previousState: NinjaState,
  newNinja: string,
  newNinjaMetadata: NinjaMetadata,
): NinjaState => {
  return produce(previousState, (state) => {
    state.ninjas.push(newNinja);
    state.ninjaMetadata.set(newNinja, newNinjaMetadata);
    state.lastModified = Date.now();
  });
};

const nextState = getStateWithNewNinja(
  initialState,
  "Yoshi",
  { homeIsland: "Yoshi's Island" },
);

console.assert(
  nextState.ninjas.length ===
    initialState.ninjas.length + 1,
  "Added a new ninja",
);
console.assert(
  nextState.ninjaMetadata.size ===
    initialState.ninjaMetadata.size + 1,
  "Added metadata for the new ninja",
);
