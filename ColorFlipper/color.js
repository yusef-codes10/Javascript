const change = document.getElementById('btn');
const pallete = document.querySelector('.color-pallete');

change.onclick = () => {
    pallete.classList.remove('hidden');
    console.log('btn has been clicked');
}