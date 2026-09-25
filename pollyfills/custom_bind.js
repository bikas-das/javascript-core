
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

Function.prototype.customBind = function (obj, ...args) {

    if (typeof this !== 'function') throw Error('not valid function!')

    obj.func = this
    return function () {
        obj.func(...args)
    }

}

const res1 = display.customBind(person1, 32)
res1()
const res2 = display.customBind(person2, 44)
res2()
