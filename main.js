// Object Constructors 

function Cat(name, age) {
	this.name = name;
	this.age = age;
	this.image_alt = "Image of a cat";
  	this.image = "cat.jpg";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Image of a dog";
  this.image = "dog.jpg";
}

function Frog(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Image of a frog";
  this.image = "frog.jpg";
}

// GLobal Variables 
var tippy = new Cat("Tippy", 11);
var snickers = new Dog("Snickers", 20);
var kermit = new Frog("Kermit", 20);

// Arrays
var animals = [tippy, snickers, kermit];
var newNames = ["Jackie", "Nala", "Paneer"];

// Functions
function generateRandomIndex(maxIndex) {
	return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
	let i = generateRandomIndex(3);
	return newNames[i];
}

function generateRandomAge() {
	return generateRandomIndex(20);
}

function generateRandomAnimal() {
	let i = generateRandomIndex(3);
	let randomAnimal = animals[i];
	if (randomAnimal instanceof Cat) {
		return new Cat(generateRandomName(), generateRandomAge());
	}
	if (randomAnimal instanceof Dog) {
		return new Dog(generateRandomName(), generateRandomAge());
	}
	if (randomAnimal instanceof Frog) {
		return new Frog(generateRandomName(), generateRandomAge());
	}
}
