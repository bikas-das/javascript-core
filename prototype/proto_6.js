
let person1 = {
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
};


let person = Object.create(person1);
person.name = 'John';

person.greet();

console.log(person.hasOwnProperty('name')); // true


let animal = Object.create(null);
animal.name = 'Rocky';

console.log(animal.toString); // undefined
console.log(animal.hasOwnProperty); // undefined


// But you can still add and access custom properties
animal.describe = function () {
    console.log(`Name of the animal is ${this.name}`);
};

animal.describe(); // "Name of the animal is Roc