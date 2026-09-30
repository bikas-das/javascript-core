
let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')

let person = document.querySelector('.person')

const quotes = [
    {
        quote: 'quote - Abraham',
        person: "Abraham"
    },
    {
        quote: 'quote - Albert',
        person: "Albert"
    },
    {
        quote: 'quote - Steve ',
        person: "Steeve Jobs"
    },
    {
        quote: 'quote - Gandhi',
        person: "Gandhi"
    },
]

btn.addEventListener('click', () => {
    console.log('called...');

    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote
    quote.innerText = quotes[random].person

})