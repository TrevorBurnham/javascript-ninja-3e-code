const ninjas = ["Kuma", "Hattori", "Yagyu"] as const;

ninjas.push("Waluigi"); // TypeScript error

type NinjaName = (typeof ninjas)[number];

interface NinjaMetadata {
  homeIsland: string;
}

const ninjaMetadata: ReadonlyMap<NinjaName, NinjaMetadata> =
  new Map(
    Object.entries({
      Kuma: { homeIsland: "Honshu" },
      Hattori: { homeIsland: "Hokkaido" },
    }) as [NinjaName, NinjaMetadata][],
  );

ninjaMetadata.set("Yagyu", { homeIsland: "Figi" }); // TypeScript error
