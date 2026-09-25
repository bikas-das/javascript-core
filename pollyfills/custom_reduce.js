


let arr = [2, 4, 6, 8]

Array.prototype.customReduce = function (callback) {
    let accumulator = 0;
    for (let i = 0; i < this.length; i++) {

        accumulator = callback(this[i], accumulator)
    }
    return accumulator

}

const result = arr.customReduce((accumulator, initial) => {
    return accumulator + initial
}, 0)

console.log(result);

