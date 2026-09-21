

//simple curry

function add1(a){
    return function(b){
            return a + b
    }
}

//only using currying
console.log(add1(5)(7));
const r1 = add1(10)
const r2 = r1(5)
console.log(r2);

//same above using bind

const b1 = add1(50)
const b2 = b1.bind(this, 10)
console.log(b2());


//only bind works here.. currying is not possible

function add2(a , b){
    return a + b
}

const p1 = add2.bind(this, 20)
const p2 = p1(20)
console.log(p2);


//currying and bind...
function add3(n){
    return m => m + n
}

//using currying
const a1 = add3(10)
const a2 = a1(2)
console.log(a2);



//using bind...
const x1 = add3(200)
const x2 = x1.bind(this, 100)
console.log(x2());

const res = a => b  => (a + b)
console.log(res(90)(100));
const z1 = res(200)
const z2 = z1.bind(this, 300)
console.log(z2());



