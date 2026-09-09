
const allLangs = document.querySelector('.parent')
const next = document.querySelector('.next')

const langList = [...allLangs.children]
let currentIndex = -1;

next.addEventListener('click', (event) => {
    if (currentIndex >= 0 && currentIndex < langList.length) {
        langList[currentIndex].style.color = ''

    }
    
      currentIndex = (currentIndex + 1) % langList.length - 1;


    // if(currentIndex == langList.length - 1){
        // currentIndex = currentIndex +1 % langList.length
    // }

    currentIndex += 1;
    langList[currentIndex].style.color = 'red'



})