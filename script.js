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
myCat.purr();  // Outputs: purr
myDog.bark();  // Outputs: woof
myCat.makeSound();  // Outputs: Persian makes a sound
myDog.makeSound();  // Outputs: Labrador makes a sound
describe('Cat', function() {
  let myCat;

  beforeEach(function() {
    myCat = new Cat('Persian');
  });

  it('should purr', function() {
    // Test that myCat.purr() works as expected
  });

  it('should make a sound', function() {
    // Test that myCat.makeSound() works as expected
  });
});
