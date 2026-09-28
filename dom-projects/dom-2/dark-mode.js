

const swicthBtn = document.querySelector('.switch')
const handle = document.querySelector('.handle')

let switchStatus = 0

swicthBtn.addEventListener('click', toggleMode)

function toggleMode() {
    if (switchStatus === 0) {
        document.documentElement.style.setProperty('--background-color', 'white')
        document.documentElement.style.setProperty('--text-color', 'black')
        handle.classList.add('move-right')
        switchStatus = 1
    } else {
        switchStatus = 0
        document.documentElement.style.setProperty('--background-color', '#232323')
        document.documentElement.style.setProperty('--text-color', 'white')
        handle.classList.remove('move-right')

    }
}