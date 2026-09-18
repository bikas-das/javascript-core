
let person = {
    name: 'ramesh',
    address: 'chennai'
}

// Object.freeze(person)
Object.seal(person)
person.address = 'surat'
person.age = 35
delete person['name']
console.log(person);


Object.defineProperty(person, 'name',{
    writable: false
})

person.name = 'roma'
console.log(person);
