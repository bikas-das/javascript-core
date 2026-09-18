
const cookingProcess = fn => (...param) => {
    return fn(...param)
}


const startCooking = (p1, callback) => {
    console.log('will start soon... waiting for ingredients');
    callback(p1)
}

const res = cookingProcess(startCooking)

res('started pizza preperation....', console.log)

