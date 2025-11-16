// key concepts
// document.querySelector()
// document.getElementById()
// addEvenetListener()
// if statements
// toString()
// setInterval()
// innerHTML

const playBtn = document.getElementById('play');
const timerContent = document.getElementById('timer');

playBtn.addEventListener('click', () => console.log('clicked'));

function play() {
    let counter = 0;
    while (true) {
        timerContent.textContent = counter;
        if (counter === 10) {
            return;
        }
        counter++;
    }
}