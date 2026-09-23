

function User(name, role) {
    this.name = name;
    this.role = role;;
    this.greet = function () {
        console.log(`my name is ${this.name}`);

    }

}

const user1 = new User('bikash', 'admin')
const user2 = new User('ryan', 'ceo')


user1.greet()
user2.greet()

//same using class


class NewUser {
    constructor(name, role) {
        this.name = name;
        this.role = role;;
    }
    greet() {
        console.log(`my name is ${this.name}`);

    }

}

const newU1 = new NewUser('vishal', 'dev-II')
const newU2 = new NewUser('aswini', 'QA')

console.log('----------------');

newU1.greet()
newU2.greet()
