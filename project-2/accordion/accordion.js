
const btns = document.querySelectorAll('.question');

Array.from(btns).map((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('show-text')
        btn.style.transition = '1s'

    })
})