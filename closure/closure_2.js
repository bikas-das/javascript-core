

var noOfcall = 0;
function test() {
    if (noOfcall <= 1) {
        return function mainFunc() {
            noOfcall += 1;
            console.log('tiggered once...');
        }

    } else{
        return;
    }
}

const res = test();
res();


