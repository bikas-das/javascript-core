
function Animal(name) {
    this.name = name
}

Animal.prototype.makeSound = function () {
    console.log(this.constructor.name + ' makes a sound');
}

//child object constructor

function Dog(name) {
    Animal.call(this, name)  // calling parent constructor
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

Dog.prototype.bark = function () {
    console.log('woof!');
}

const bolt = new Dog('bolt')

console.log(bolt.name);
bolt.makeSound()
bolt.bark()


console.log(bolt);
const a = new Animal()
console.log(a);

