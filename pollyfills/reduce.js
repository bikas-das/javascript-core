

let arr = [2, 4, 6, 8]
// let accumulator = 0
// function allSum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let current = arr[i]

//         accumulator += current

//     }
//     return accumulator
// }

// console.log(allSum(arr));



const result = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)

console.log(result);

