

const url = 'https://jsonplaceholder.typicode.com/posts';


fetch(url).then((data) => {
    console.log(data);
    return data.json()
}).then((result) => {
    console.log(result);

}).catch((err) => {
    console.log(err);

})  