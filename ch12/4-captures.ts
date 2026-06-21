const timeRegex = /(\d{2}):(\d{2})/;
const ninjaOrders = "Strike at 23:45!";
const found = ninjaOrders.match(timeRegex);

if (found === null) {
  console.assert(false, "Match expected");
} else {
  const [match, hours, minutes] = found;
  console.assert(
    match === "23:45",
    "The full match is '23:45'",
  );
  console.assert(
    hours === "23",
    "The first capture group is '23'",
  );
  console.assert(
    minutes === "45",
    "The second capture group is '45'",
  );
}
