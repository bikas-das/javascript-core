
const txt = document.querySelector('.add-div')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    console.log(txt.value);
    createDivs(txt.value)
    txt.value = ''
})

const removeElement = (el) => {
    el.remove();
}

// const div = document.createElement('div')

function createDivs(nodeText) {
    const div = document.createElement('div')
    div.className = 'main'
    div.id = Math.round(Math.random() * 10 + 1)
    div.setAttribute('title', 'new title')
    div.style.width = '250px'
    div.style.height = '8px'
    div.style.color = 'white'
    div.style.backgroundColor = 'gray'
    div.style.padding = '10px'
    div.style.marginTop = '15px'

    const textNode = document.createTextNode(nodeText)
    div.appendChild(textNode)
    document.body.appendChild(div)

    //remove
    div.onclick = removeElement.bind(null, div)

}



//  div.onclick = removeElement(div)   will not work

// div.onclick = () => {
//  removeElement(div)
// }


//    div.addEventListener('click', (e) => {
//       removeElement(div)
//    })


// function sayHi(name) {
//     console.log('hi : ', name);

// }
// document.onclick = () => {
//     sayHi('test')
// }


