

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved p1...')
    }, 500);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved p2...')
    }, 2000);

});




async function resolvePromise() {
    console.log('inside resolve ....');
    const r1 = await p1;
    console.log('before p1');
    console.log(r1);

    const r2 = await p2;
    console.log('before p2');
    console.log(r2);
}

resolvePromise()