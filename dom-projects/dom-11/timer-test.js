

const timer = document.getElementById('timer')
const startStopBtn = document.querySelector('.startStopBtn')
const resetBtn = document.querySelector('.resetBtn')

let second = 0
let minute = 0
let hour = 0

let leadingSecond = 0
let leadingMinute = 0
let leadingHour = 0

let isPlay = false
let timerStatus = null


function startTimer() {
    second++
    if (second == 60) {
        minute++
    }
    if (minute == 60) {
        hour++
    }

    leadingSecond = second < 10 ? '0' + second.toString() : second;
    leadingMinute = minute < 10 ? '0' + minute.toString() : minute
    leadingHour = hour < 10 ? '0' + hour.toString() : hour


    timer.innerHTML = `${leadingHour} : ${leadingMinute} : ${leadingSecond}`
}



startStopBtn.addEventListener('click', (e) => {

    if (!isPlay) {
        isPlay = true
        startStopBtn.innerHTML = 'Pause'
        timerStatus = window.setInterval(startTimer, 1000)
    } else {
        isPlay = false
        startStopBtn.innerHTML = 'Play'
        window.clearInterval(timerStatus)
    }
})

resetBtn.addEventListener('click', (e) => {
    console.log('called... ..');

    window.clearInterval(timerStatus)
    timer.innerHTML = `${'00'} : ${'00'} : ${'00'}`
    startStopBtn.innerHTML = 'Play'


})
