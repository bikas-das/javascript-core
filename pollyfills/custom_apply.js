
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

Function.prototype.customApply = function (obj, ...args) {

    if (!Array.isArray(...args)) throw Error('not valid function!')

    obj.func = this
    obj.func(...args)

}

display.customApply(person1, [32])
display.customApply(person2, [44])

