// modal
// Key concepts for project
// document.getElementById()
// addEventListener()
// e.target
// CSS styling through JavaScript
// CSS Animation

const openBtn = document.getElementById('openBtn');
const popUp = document.querySelector('.pop-up');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', () => popUp.classList.toggle('hidden')) ;

