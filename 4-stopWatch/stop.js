// key concepts
// document.querySelector()
// document.getElementById()
// addEvenetListener()
// if statements
// toString()
// setInterval()
// innerHTML

// buttons
const stopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#reset');

// time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// stop watch function 
function stopWatch() {

    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    let displayTimer = document.getElementById('timer').innerText 
    = hours + ':' + minutes + ':' + seconds;
    
}

const playInterval = window.setInterval(stopWatch, 1000);

function setTimeOut() {
    clearInterval(playInterval);
    console.log('stopped');
}

resetBtn.addEventListener('click', setTimeOut);