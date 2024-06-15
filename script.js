class Animal {
	constructor(species){
		this.species = species;
	}
	makeSound(){
		console.log(this.species + " makes a sound");
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

let myCat = new Cat("Persian");
let myDog = new Dog("Labrador");

myCat.purr();  // Outputs: purr
myDog.bark();  // Outputs: woof
myCat.makeSound();  // Outputs: Persian makes a sound
myDog.makeSound();  // Outputs: Labrador makes a sound