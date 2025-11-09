// ! Selecting an element (the ul)
const ul = document.querySelector('ul');

//! Creating elements (li)
const xMen = document.createElement('li');
const transformers = document.createElement('li');



//! Adding elements (adding li items the list)
ul.append(transformers);
ul.append(xMen);




// ! Modifying the text
transformers.textContent = 'transformers';
xMen.textContent = 'xmen';


