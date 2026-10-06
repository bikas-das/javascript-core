

const userForm = document.getElementById('userInfo')
const id = document.querySelector('.userId')
const uname = document.querySelector('.userName')

let userId = ''
let userName = ''
userForm.addEventListener("submit", (event) => {
    event.preventDefault()
    userId = id.value;
    userName = uname.value;
    document.querySelector('.display').innerHTML = `${userId} and ${userName}`
})

