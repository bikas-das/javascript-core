

let arr = ['apple']

Array.prototype.customPush = function (item) {

    console.log(item);
    this[this.length] = item

}

arr.customPush('orange')
console.log(arr);
arr.customPush('banana')
console.log(arr);

