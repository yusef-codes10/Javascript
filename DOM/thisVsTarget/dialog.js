const dialog = document.querySelector("#dialog");
const clickBtn = document.querySelector('#clickBtn');
const closeDialogBtn = document.querySelector('#closeDialog');

clickBtn.addEventListener('click', openDialog);
closeDialogBtn.addEventListener('click', closeDialog);

function openDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

// ! using event delegation
const cardsContainer = document.querySelector('.cards');
console.log(cardsContainer);
cardsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-card')) {
        console.log('closing the card');
        e.target.parentElement.classList.toggle('hidden');
    }
    console.log('Oops! you are touching the card!');
})
