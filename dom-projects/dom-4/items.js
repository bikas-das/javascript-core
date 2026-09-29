

const listItems = document.querySelector('.list-items')
const allChildItems = document.querySelectorAll('.list-items li')

console.log(allChildItems);
console.log([...allChildItems]);


console.log(listItems);
console.log([...listItems.children]);



console.log(listItems.firstElementChild.textContent);
console.log(listItems.lastElementChild.textContent);
const firstChild = listItems.firstElementChild
console.log('only next: ', firstChild.nextSibling.nextSibling);

console.log(firstChild.nextElementSibling.textContent);
console.log(firstChild.nextElementSibling.nextElementSibling.textContent);


listItems.firstElementChild.setAttribute('id', 'ap')
console.log(listItems.firstElementChild.id);
console.log(listItems.firstElementChild.getAttribute('id'));




const li = document.createElement('li')
const textContent = document.createTextNode('strawberry')
li.appendChild(textContent)
listItems.appendChild(li)

// listItems.removeChild(li)
// listItems.remove()
// li.appendChild(document.createTextNode('strawberry'))

li.classList.add('item-random')
console.log(li.classList.contains('item-random'))
// li.classList.remove('item-random')
// console.log(listItems);


// document.documentElement.style.background = 'black'
// document.body.style.backgroundColor = 'cyan'

const node1 = document.documentElement
console.log(node1);
console.log(node1.children);
console.log(node1.parentNode);
console.log(node1.parentElement);
console.log(node1.children[1]);








