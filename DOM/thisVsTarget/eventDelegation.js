// !2- using event delegation
// attach the event listener to a parent
const container = document.querySelector('.container');
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.classList.toggle('hidden');
        console.log('icons has been clicked');
    }
    console.log('event fired');
})