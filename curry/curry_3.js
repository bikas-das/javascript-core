
function mul(a, b) {
    return a * b;
}
// console.log(mul(2, 3 ));

const currieddMul = a => b => a * b;


// const res1 = currieddMul(10);
// console.log(res1);
// const res2 = res1(5);
// console.log(res2);

const ress = currieddMul(10)(8);
console.log(ress);




