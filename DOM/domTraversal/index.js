// logic
// by id
const grandParent = document.querySelector('.grand-parent');
// selecting the childen
const childen = Array.from(grandParent.children);
childen.forEach(changeColor)

function changeColor(element) {
    element.style.backgroundColor = '#333111';
}
