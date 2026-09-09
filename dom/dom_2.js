
const allLangs = document.querySelector('.parent')
const next = document.querySelector('.next')

const langList = [...allLangs.children]
let currentIndex = -1;

next.addEventListener('click', (event) => {
    if (currentIndex >= 0 && currentIndex <= langList.length) {
        langList[currentIndex].style.color = ''

    }    

    if (currentIndex == langList.length - 1) {
        currentIndex = 0        
    } else{
        currentIndex += 1;
    } 
        langList[currentIndex].style.color = 'red'
})