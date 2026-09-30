

const listItems = document.querySelector('.list-items')


// document.querySelector('.fruit-1').addEventListener('click', (event) => {
//     console.log(event.target);
//     const target = event.target
//     target.style.backgroundColor = 'lightgrey'

// })

listItems.addEventListener('click', (event) => {
    const target = event.target
    console.log(event.target.getAttribute('class') + ' is clicked...');
    target.style.backgroundColor = 'lightgrey'
})

