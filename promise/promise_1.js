


function promise1() {
    let err = false
    return new Promise((resolve, reject) => {
        err ? reject('error!') : resolve('resolved....')

    })
}

promise1().then((data) => console.log(data)).catch((err) => console.log(err))

