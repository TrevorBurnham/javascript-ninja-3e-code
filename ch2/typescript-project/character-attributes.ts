interface Mage {
  magic: number;
}

interface Thief {
  dexterity: number;
}

interface MageThief extends Mage, Thief {}

const rerollAttributes = (character: Mage | Thief) => {
  if ("magic" in character) {
    character.magic = Math.ceil(Math.random() * 20);
  }
  if ("dexterity" in character) {
    character.dexterity = Math.ceil(Math.random() * 20);
  }
};
