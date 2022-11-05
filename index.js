/* const person = {
  name: "Pepe",
  age: 25,
  hobbies: [],
  sayHi() {
    return "hola";
  },
  addHobby(hobby) {
    this.hobbies.push(hobby);
  },
  growOld() {
    this.age += 40;
  },
};
*/

class Person {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  sayHi() {
    return `Hola, soy ${this.name}`;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  growOld() {
    this.age += 40;
  }
}

/* const pepe = new Person("Pepe", 25, ["Bailar", "Cocinar"]);
const maria = new Person("María", 23, ["Ski"]);

console.log(pepe);
console.log(maria);

console.log(pepe.sayHi()); */

class OldPerson extends Person {
  constructor(name, age, hobbies, boina) {
    super(name, age, hobbies);
    this.boina = boina;
  }

  complain() {
    console.log("En mis tiempos...");
  }
}

const Alex = new Person("Alex", 28, []);
const Jorge = new OldPerson("Jorge", 65, [], true);

Jorge.complain();
Alex.complain();
console.log(Jorge.name);
