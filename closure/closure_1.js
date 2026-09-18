
let a = 1
function outer() {
    let b = 2;
    function inner() {
        console.log(a);
        console.log(b);


    }
    inner()
}

outer()
