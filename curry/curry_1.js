

function add(a){
    return function add2(b){
       return function add3(c){
            return (a+b+c)            
        }
    }
}

const newAdd = a => b => c => (a + b + c)

const b = add(1)(2)(3)
console.log(b);

const res = newAdd(10)(20)(30)
console.log(res);

