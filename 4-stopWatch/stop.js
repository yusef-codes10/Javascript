// key concepts
// document.querySelector()
// document.getElementById()
// addEvenetListener()
// if statements
// toString()
// setInterval()
// innerHTML

// buttons
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// leading zeros
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// interval and timer status
let timerInterval = null;
let timerStatus = "stopped";

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
  seconds < 10
    ? (leadingSeconds = "0" + seconds.toString())
    : (leadingSeconds = seconds);

  minutes < 10
    ? (leadingMinutes = "0" + minutes.toString())
    : (leadingMinutes = minutes);

  hours < 10 ? (leadingHours = "0" + hours.toString()) : (leadingHours = hours);

  let displayTimer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

// const playInterval = window.setInterval(stopWatch, 1000);

// we wanna have control over when the stop watch starts
startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStopBtn").innerHTML =
      '<i class="fa-solid fa-pause" id="reset"></i>';

    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById("startStopBtn").innerHTML =
      '<i class="fa-solid fa-play" id="play"></i>';
    timerStatus = "stopped";
    
  }
});
