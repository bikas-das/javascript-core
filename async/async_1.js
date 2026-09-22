
function firstPromise() {
    return new Promise((resolve, reject) => {
            resolve('promise-1 resolved...')
        // reject('error!!!')
    })
}

const getData = async () => {
    try {
        const res = await firstPromise()
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

getData()


