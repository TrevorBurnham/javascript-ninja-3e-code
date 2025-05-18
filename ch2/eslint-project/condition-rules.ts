const ninja = Math.random() > 0.5 ? "ryu" : "naruto";

if (ninja === "ryu" || "naruto") {
  // Error: no-constant-condition
}

if (ninja) {
  // Error: @typescript-eslint/no-unnecessary-condition
}
