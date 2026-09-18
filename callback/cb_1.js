

let pizza;

function orderPizza(callbaack) {
    console.log('order pizza');

    setTimeout(() => {
        pizza = 'veg_pizza'
        callbaack(`eat ${pizza}`)
    }, 1000)
}

orderPizza(console.log);
// console.log(`eat ${pizza}`)