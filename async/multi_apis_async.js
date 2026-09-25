

// if two apis are independent of each other call them parallally with minimun time span


function fetchWeather() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(
                {
                    temp: '32f',
                    humidity: '20%'
                })

        })
    }, 2000);
}


function fetchStocks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                {
                    price: '$766',
                    rise: '+16%'
                })
        }, 2000);
    })
}

// const start = Date.now();
// fetchWeather().then((data) => console.log(data))
// fetchStocks().then((data) => console.log(data))

// const end = Date.now();
// console.log(`Execution time: ${end - start} ms`);


async function fetchAllData() {
    const start = Date.now();
    const weatherApi = await fetchWeather()
    const stockApi = await fetchStocks()
    console.log(weatherApi);
    console.log(stockApi);
    const end = Date.now();
    console.log(`Execution time: ${end - start} ms`);
}


fetchAllData()



