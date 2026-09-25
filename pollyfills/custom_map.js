

let fruits = ['apple', 'orange', 'banana']


Array.prototype.customMap = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }


}

fruits.customMap((data) => console.log(data))


