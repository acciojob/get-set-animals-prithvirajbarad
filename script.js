class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        // This method will be overridden in the subclasses
    }
}

class Cat extends Animal {
    purr() {
        console.log("purr");
    }

    makeSound() {
        this.purr();  // A cat's sound is purring
    }
}

class Dog extends Animal {
    bark() {
        console.log("woof");
    }

    makeSound() {
        this.bark();  // A dog's sound is barking
    }
}

// Example usage:
const myCat = new Cat("Felis catus");
const myDog = new Dog("Canis lupus familiaris");

console.log(`My cat belongs to the species: ${myCat.species}`);
myCat.makeSound();

console.log(`My dog belongs to the species: ${myDog.species}`);
myDog.makeSound();