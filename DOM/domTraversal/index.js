// logic
// by id
const grandParent = document.getElementById('grandParent');


function changeColor(element) {
    element.style.backgroundColor = '#333111';
}

changeColor(grandParent);


// by className
const parents = document.getElementsByClassName('parent');
// using foreach
parents.foreach(changeColor);