
let header = document.querySelector('.nav-header')
let linkSection = document.querySelector('.links')

header.addEventListener('click', () => {
    linkSection.classList.toggle('show-links')
})
