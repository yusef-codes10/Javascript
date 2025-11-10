// DOM Nanipulation

// Traverse the DOM

// Parent Node traversal
const ul = document.querySelector('ul');
console.log(ul.parentNode);
console.log(ul.parentElement);

// Child Node traversal
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = "blue";


// Siblings traversal