let person1 = {
    name: 'das'
}

let person2 = {
    age: 32
}

person2 = { ...person1, ...person2 }
console.log(person2);
person2 = { ...person1 }
console.log(person2);




let person_1 = {
    name: 'Jack',
    age: 32,
    country: 'singapore',
    hobbies: {
        sport: 'cricket'
    }
}

// let person_2 = person_1
// printPerson()

// person_2.name = 'jill'
// printPerson()

// person_2.hobbies = 'football'
// printPerson()

// let person_2 = Object.assign({}, person_1);
// printPerson() 

// let person_2 = {...person_1};
// printPerson()


//  let person_2 = {'lang': 'Js'};
//  person_2 = {...person_1, ...person_2}
//  printPerson()

let person_2 = { 'lang': 'Js' };
person_1 = { ...person_1, ...person_2 }
printPerson()
person_1.lang ='java'
printPerson()


function printPerson() {
    console.log('person_2', person_2);
    console.log('person_1', person_1);
}

const newPerson = Object.create(person_1); // inherits person_1
console.log(newPerson); 


