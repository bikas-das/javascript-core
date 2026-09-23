

function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};


let john = new Person('Bikash', 31);

john.sayHello();

console.log(john.__proto__ === Person.prototype);

console.log(Object.getPrototypeOf(john) === Person.prototype); 
