
let person1 = {
    name: 'jack',
    address: 'newyork',
    lang: 'english',
    hobby: {
        sports: 'cricket'
    },
    others: {
        extra: 'swimming',
        eat: {
            fruit: 'apple'
        }
    }
}

let person2 = { ...person1, hobby: { ...person1.hobby }, others: { ...person1.others, eat: { ...person1.others.eat } } };

// print()

person2.lang = 'hindi'
person2.hobby.sports = 'football'
person2.others.extra = 'cycling'
person2.others.eat.fruit = 'orange'

print()


function print() {
    console.log('----------');
    console.log('person1: ', person1);
    console.log('person2 : ', person2);
}

