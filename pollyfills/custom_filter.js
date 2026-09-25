

let nums = [3, 8, 12, 16, 9, 7, 5]

Array.prototype.customFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]))
            result.push(this[i])
    }
    return result
}


const res = nums.customFilter((num) => num > 10)
console.log(res);

