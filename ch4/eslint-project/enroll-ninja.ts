const dojoStudents = new Map([["Hidden Leaf", 2]]);

const enrollNinja = (dojoName: string) => {
  if (!dojoStudents.has(dojoName)) {
    dojoStudents.set(dojoName, 0);
  }
  dojoStudents.set(dojoName, dojoStudents.get(dojoName)! + 1);
};

enrollNinja("Hidden Leaf");
console.assert(
  dojoStudents.get("Hidden Leaf") === 3,
  "enrollNinja adds students to existing dojos.",
);
enrollNinja("Snake Way");
console.assert(
  dojoStudents.get("Snake Way") === 1,
  "enrollNinja adds students to new dojos.",
);
