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
const colorValue = document.querySelector('span');

redBtn.onclick = () => {
    console.log('red has been clicked');
    document.body.style.backgroundColor = 'red';
    colorValue.textContent = '#ff0000';
}

orangeBtn.onclick = () => {
    console.log('orange has been clicked');
    document.body.style.backgroundColor = 'orange';
    colorValue.textContent = '#ffa500';


}
blueBtn.onclick = () => {
    console.log('blue has been clicked');
    document.body.style.backgroundColor = 'blue';
    colorValue.textContent = '#0000ff';
    

}
yellowBtn.onclick = () => {
    console.log('yellow has been clicked');
    document.body.style.backgroundColor = 'yellow';
    colorValue.textContent = '#ffff00';


}
greenBtn.onclick = () => {
    console.log('green has been clicked');
    document.body.style.backgroundColor = 'green';
    colorValue.textContent = '#008000';


}
purpleBtn.onclick = () => {
    console.log('purple has been clicked');
    document.body.style.backgroundColor = 'purple';
    colorValue.textContent = '#800080';


}
