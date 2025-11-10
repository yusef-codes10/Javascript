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
    document.body.style.backgroundColor = 'red';
}

orangeBtn.onclick = () => {
    console.log('orange has been clicked');
    document.body.style.backgroundColor = 'orange';

}
blueBtn.onclick = () => {
    console.log('blue has been clicked');
    document.body.style.backgroundColor = 'blue';

}
yellowBtn.onclick = () => {
    console.log('yellow has been clicked');
    document.body.style.backgroundColor = 'yellow';

}
greenBtn.onclick = () => {
    console.log('green has been clicked');
    document.body.style.backgroundColor = 'green';

}
purpleBtn.onclick = () => {
    console.log('purple has been clicked');
    document.body.style.backgroundColor = 'purple';

}
