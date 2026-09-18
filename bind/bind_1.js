
// currying....
function multiply(m) {
    return function (n) {
        return m * n;
    }
}


// same using shorthand\
// function mul(n) {    
//     return m => m * n;
// }

const mul = multiply(10);
const mulby2 = mul(2);
console.log('res: ', mulby2);

const mulBy5 = mul(5)
console.log(mulBy5);

console.log('------------------');



// same using bind
const mulBind = multiply(10) 
const mulBind2 = mulBind.bind(this, 2)
console.log(mulBind2(2));

const mulBind5 = mulBind.bind(this, 5)
console.log(mulBind5(5));

