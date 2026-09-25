

function fakePromise(param) {
    return new Promise((resolve, reject) => {
        resolve(param)
    })
}



Function.prototype.customPromiseAll = function (promiseArray) {
    let res = []
    return new Promise((resolve, reject) => {
        for (const promise of promiseArray) {
            res.push(promise)
        }
        if (res.length === promiseArray.length) {
            resolve(res)
        }
    }
    )
}




// Promise.all([fakePromise(1), fakePromise(10), fakePromise(100)])
//     .then((res) => console.log(res)
//     ).catch((err) => console.log(err)
//     )


Promise.customPromiseAll([fakePromise(1), fakePromise(10), fakePromise(100)])
    .then((data) => console.log(data)
    ).catch((err) => console.log(err)
    )



