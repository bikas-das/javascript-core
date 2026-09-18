

const adddCustomer = fn => (...args) => {
    console.log('saving customer info ....');
    return fn(...args);
}


const processOrder = fn => (...args) => {
    console.log(`processing order #${args[0]}`);
    return fn(...args)
}

let completeOrder = (...args) => {
    console.log(`Order #${[...args].toString()} completed`);

}

completeOrder = processOrder(completeOrder);
console.log(completeOrder);
completeOrder = adddCustomer(completeOrder);
completeOrder(2199);

