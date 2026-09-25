

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved p1...')
    }, 20000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved p2...')
    }, 10000);

});

async function resolvePromise1() {
    console.log('inside resolve ....1');
    const r1 = await p1;
    console.log(r1);

}

async function resolvePromise2() {
    console.log('inside resolve ....2');
    const r2 = await p2;
    console.log(r2);

}

function independent() {
    console.log('i am an independent func...');

}

resolvePromise1()
resolvePromise2()
independent()