class Pokemon {
  constructor(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + JSON.stringify(b));
    console.log("C: " + c);
    this.name = a;
    this.attack = b;
    this.life = c;
  }

  sayHello() {
    console.log(`Hi, I'm ${this.name}!`);
  }

  doAttack() {
    return this.attack.power;
  }

  receiveDamage(damage) {
    this.life -= damage;
  }

  getLife() {
    return this.life;
  }
}

const pikachu = new Pokemon("Pikachu", { attackName: "Slam", power: 50 }, 200);
const charizard = new Pokemon(
  "Charizard",
  { attackName: "Flamethrower", power: 75 },
  250
);

while (pikachu.getLife() > 0 && charizard.getLife() > 0) {
  charizard.receiveDamage(pikachu.doAttack());
  pikachu.receiveDamage(charizard.doAttack());
  console.log(`Charizard's life is ${charizard.getLife()}`);
  console.log(`Pikachu's life is ${pikachu.getLife()}`);
}

console.log(charizard.attack);
