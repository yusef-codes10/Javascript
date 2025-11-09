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