//complete this code
class Animal {
	constuctor(species){
		 this.species=species;
	}
	makeSound(){
		console.log(this.species + " makes a sound");
	}
}

class Dog extends Animal {
	bark()
	{
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
