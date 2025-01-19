interface StarshipOptions {
  captain: "Kirk" | "Picard" | "Janeway";
  warpFactor: number;
  engage?: boolean;
}

const startStarship = (options: StarshipOptions) => {
  const { captain, warpFactor, engage } = options;
  if (!engage) {
    return "Awaiting orders from Starfleet.";
  }
  return `Captain ${captain} says: Set warp ${warpFactor}. Engage!`;
};
