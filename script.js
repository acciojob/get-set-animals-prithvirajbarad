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
console.log("Species: " + cat.species); // Accessing the getter
cat.makeSound(); // Call the method inherited from Animal class
cat.purr(); // Call the purr method specific to Cat class

const dog = new Dog("Golden Retriever");
console.log("Species: " + dog.species); // Accessing the getter
dog.makeSound(); // Call the method inherited from Animal class
dog.bark(); // Call the bark meth