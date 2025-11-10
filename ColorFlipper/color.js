const change = document.getElementById('btn');
const pallete = document.querySelector('.color-pallete');

change.onclick = () => {

    if (pallete.classList.contains('hidden')) {
        pallete.classList.remove('hidden');
    } else {
        pallete.classList.add('hidden');
    }
    
    console.log('btn has been clicked');
}

// clickable div
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');
const greenBtn = document.getElementById('green');
const yellowBtn = document.getElementById('yellow');
const orangeBtn = document.getElementById('orange');
const purpleBtn = document.getElementById('purple');

redBtn.onclick = () => {
    console.log('red has been clicked');
}

orangeBtn.onclick = () => {
    console.log('orange has been clicked');
}
blueBtn.onclick = () => {
    console.log('blue has been clicked');
}
yellowBtn.onclick = () => {
    console.log('yellow has been clicked');
}
greenBtn.onclick = () => {
    console.log('green has been clicked');
}
purpleBtn.onclick = () => {
    console.log('purple has been clicked');
}
