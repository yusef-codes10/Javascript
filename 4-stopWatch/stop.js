// key concepts
// document.querySelector()
// document.getElementById()
// addEvenetListener()
// if statements
// toString()
// setInterval()
// innerHTML

// buttons
const stopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#reset");

// time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// leading zeros
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

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
  // include leading zeros
  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  let displayTimer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

const playInterval = window.setInterval(stopWatch, 1000);

function setTimeOut() {
  clearInterval(playInterval);
  console.log("stopped");
}

resetBtn.addEventListener("click", setTimeOut);
