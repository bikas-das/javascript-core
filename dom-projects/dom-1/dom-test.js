
const quote = 'it is absolutely important to keep improving';
const title = document.querySelector('h1')

const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    title.innerText = quote;


})
