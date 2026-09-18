
function first(callback) {

    setTimeout(() => {
        console.log('executed func-1');
        callback()
    }, 1000);

}

function second(callback) {

    setTimeout(() => {
        console.log('executed func-2');
        callback()
    }, 300);

}

function third(callback) {

    setTimeout(() => {
        console.log('executed func-3');
        callback()
    }, 200);

}

function four() {

    setTimeout(() => {
        console.log('executed func-4');

    }, 700);
}


 first(() =>{
    second(() => {
        third(() => {
            four()
        })
    })
 })

// first()
// second()
// third()
// four()