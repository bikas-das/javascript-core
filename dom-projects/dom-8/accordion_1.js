
const accordionContainer = document.querySelectorAll('.accordion-container');
const accordion = document.querySelector('.accordion');



[...accordionContainer].map((elem) => {
    elem.addEventListener('click', function () {
        if (accordion.style.width === '40%') {
            accordion.style.width = '60%'
            accordion.style.transition = '1s'
            this.classList.add('active')

        } else {
            accordion.style.width = '40%'
            accordion.style.transition = '1s'
            this.classList.remove('active')

        }
    })

})
