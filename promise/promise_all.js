
const p1 = new Promise((resolve, reject) => {

        resolve('p1 done')

})

const p2 = new Promise((resolve, reject) => {


        reject('p2 failed')
})

const p3 = new Promise((resolve, reject) => {

        resolve('p3 done')
})

const allPromises = [p1, p2, p3]


//return all result in an aarray if all promises are resolved..
// at any point a single promise fails it will return from there, wont move further 
Promise.all(allPromises)
    .then((data) => console.log(data)
    ).catch((err) => console.log(err)
    )
