const directory = new Map<string, string>();

directory.set("Yoshi", "+81 26 6462 9152");
directory.set("Kuma", "+81 52 2378 6462");
directory.set("Hiro", "+81 76 2771 4624");

for (const [key, value] of directory) {
  console.assert(key !== null, "Key:" + key);
  console.assert(value !== null, "Value:" + value);
}

for (const key of directory.keys()) {
  console.assert(key !== null, "Key:" + key);
  console.assert(
    directory.get(key) != null,
    "Value:" + directory.get(key),
  );
}

for (const value of directory.values()) {
  console.assert(value !== null, "Value:" + value);
}
