
const counterValue = document.getElementById('value')
const allBtns = document.querySelectorAll('.btn')

let count = 0;
Array.from(allBtns).map((d) => {
    d.addEventListener('click', (event) => {
        const classList = event.target.classList
        if (classList.contains('increase')) {
            count++;
        } else if (classList.contains('decrease')) {
            if (count === 0) return;
            count--

        } else {
            count = 0
        }
        counterValue.innerHTML = count
    })

})


