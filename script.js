class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound(sound) {
    console.log(sound);
  }
}

class Cat extends Animal {
  purr() {
    this.makeSound("purr");
  }
}

class Dog extends Animal {
  bark() {
    this.makeSound("woof");
  }
}

// Usage example
const cat = new Cat("Domestic Cat");
const dog = new Dog("Golden Retriever");

console.log(cat.species); // Output: Domestic Cat
cat.purr(); // Output: purr
console.log(dog.species); // Output: Golden Retriever
dog.bark(); 