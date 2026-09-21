

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {

        reject('p1 done')
    }, 200);
})

const p2 = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve('p2 done')
    }, 600);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve('p3 done')
    }, 100);
})

const allPromises = [p1, p2, p3]



//return first executed promise , no matter whethere suceed or faileld....

Promise.race(allPromises)
    .then((data) => console.log(data)
    ).catch((err) => console.log(err)
    )
