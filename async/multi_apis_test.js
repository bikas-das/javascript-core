

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

const weatherApi = fetchWeather()
const stockApi = fetchStocks()

async function fetchAllData() {
    const start = Date.now();

    const [weatherData, stockData] = await Promise.all([weatherApi, stockApi])
    console.log(weatherData);
    console.log(stockData);
    const end = Date.now();

    console.log(`Execution time: ${end - start} ms`);
}


fetchAllData()



