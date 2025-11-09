const add = document.getElementById('btn');
const list = document.querySelector('ul');
const text = document.getElementById('text');

console.log(add);
console.log(list);


// add function
add.onclick = function add() {
    // we are going to create the list items here
    const newItem = document.createElement('li');
    // append
    list.append(newItem);
    // modify text content
    console.log('button has been clicked');
}