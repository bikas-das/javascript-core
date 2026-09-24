

const url = 'https://jsonplaceholder.typicode.com/posts';


async function getData() {
    try {
        const data = await fetch(url)
        const res = await data.json()
        console.log(res);

    } catch (error) {
        console.log(error);

    }
}

getData()