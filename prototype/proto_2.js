
const obj1 = {
    name: 'bill',
    city: 'nyc'
}

let obj2 = {}
obj2.__proto__ = obj1
console.log(obj2)
console.log(obj2.name)


let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

rabbit.walk()
