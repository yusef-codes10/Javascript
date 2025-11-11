// Event Listeners
// There are 2 ways to add event listners in js
// 1- onclicl in html element, say button
// 2- use the addEventListener() method in js


//! element.addEventListener("click", function)
const btn = document.querySelector('.btn-2');


btn.addEventListener('click', () => alert('I hate JavaScript')); 