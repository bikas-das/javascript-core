
const p1 = new Promise((resolve, reject) => {
    reject('p1 rejected')
})

const p2 = new Promise((resolve, reject) => {
    reject('p2 failed')
})

const p3 = new Promise((resolve, reject) => {
    resolve('p3 done')
})

const allPromises = [p1, p2, p3]


//return all result in an aarray irrespective of fail or pass..
Promise.allSettled(allPromises)
    .then((data) => console.log(data)
    ).catch((err) => console.log(err)
    )
