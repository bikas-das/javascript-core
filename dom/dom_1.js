

const parent = document.querySelector('.parent')
const next = document.querySelector('.next')


console.log(parent.children);
console.log(parent.childNodes);



// for (let i = 0; i < parent.children.length; i++) {
//    console.log(parent.children[i].textContent);
       
// }

// const allDays = Array.from(parent.children)
const allDays = [...parent.children]


allDays.map((day) => {
    console.log(day.textContent);
})

console.log(allDays[2]);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
const first = parent.firstElementChild
console.log(first.nextElementSibling);

next.addEventListener('click', () => {
    first.style.color = 'red'
})

