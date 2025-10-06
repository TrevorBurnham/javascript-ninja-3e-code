class Ninja {
  name: string;

  static #ninjas: Ninja[] = [];

  constructor(name: string) {
    this.name = name;
    Ninja.#ninjas.forEach((ninja) => ninja.#greet(name));
    Ninja.#ninjas.push(this);
  }

  #greet(newNinjaName: string) {
    console.log(
      `Greetings, ${newNinjaName}! I'm ${this.name}.`,
    );
  }
}

new Ninja("Kasumi");
new Ninja("Ryu");
new Ninja("Ken");
