
let person1 = {
    name: 'bikash',
    address: 'surat'
}

let person2 = {
    name: 'jack',
    address: 'ca'
}

function display(age) {
    console.log(`${this.name} lives in ${this.address} and aged ${age}`);

}

Function.prototype.customCall = function (obj, ...args) {

    if (typeof this !== 'function') throw Error('not valid function!')

    obj.func = this
    obj.func(...args)

}

// display.call(person1)
// display.call(person2)

display.customCall(person1, 32)
display.customCall(person2, 44)

