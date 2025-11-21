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