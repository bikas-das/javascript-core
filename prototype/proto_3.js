

function User() {

}

const u1 = new User()
console.log(User.prototype === u1.__proto__);
console.log(u1.constructor === User);
console.log(User.prototype.constructor === User);


console.log('------------------------');

let animal = {
    eats: true
};

let rabbit = Object.create(animal); // same as {__proto__: animal}

console.log(rabbit.eats);

console.log(Object.getPrototypeOf(rabbit) === animal);

Object.setPrototypeOf(rabbit, {})

