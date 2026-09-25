


let fruits = ['apple', 'orange', 'banana']

// Array.prototype.customForEach = function () {
//     for (let i = 0; i < this.length; i++) {
//         console.log(this[i]);
//     }
// }

// fruits.customForEach()



Array.prototype.customForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}

fruits.customForEach(data => console.log(data))