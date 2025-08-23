const makeNinjaName = async () => "Ghost of Tsushima";
const ninjaNamePromise = makeNinjaName();
console.assert(
  (await ninjaNamePromise) === "Ghost of Tsushima",
);
