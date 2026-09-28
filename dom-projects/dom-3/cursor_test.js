

const cursor = document.getElementById('cursor')


let settings = {
    mouseX: 0,
    mouseY: 0,
    xPos: 0,
    yPos: 0,
    sppeed: 2
}


let cursorWidth = cursor.offsetWidth
let cursorHeight = cursor.offsetHeight


function animate() {

    settings.xPos += (settings.mouseX - settings.xPos) / settings.sppeed
    settings.yPos += (settings.mouseY - settings.yPos) / settings.sppeed

    cursor.style.transform = `translate(${settings.xPos - cursorWidth / 2}px, ${settings.yPos - cursorHeight / 2}px)`
    requestAnimationFrame(animate)
}

animate()


document.addEventListener('mousemove', (e) => {
    // cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    settings.mouseX = e.pageX
    settings.mouseY = e.pageY

})




