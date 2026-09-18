

function add(a, b){
    return (a + b)
}

const r1 = add.bind(this, 10)
const r2 = r1(20)
console.log(r2);


function addOne(b){
    return a => a + b
}


const add1 = addOne(10)
const addBy2 = add1(2)
console.log(addBy2);


// or using bind not possible
const add2 = addOne.bind(this, 20)
const bindAdd = add2()
console.log(bindAdd(2));

