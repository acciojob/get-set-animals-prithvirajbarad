class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("Animal sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}
const cat = new Cat("Domestic Cat");
console.log("Species: " + cat.species);
cat.makeSound();
cat.purr();

const dog = new Dog("Golden Retriever");
console.log("Species: " + dog.species);
dog.makeSound();
dog.bark();