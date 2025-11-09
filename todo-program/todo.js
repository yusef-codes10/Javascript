const add = document.getElementById("btn");
const list = document.querySelector("ul");
const todo = document.getElementById("text");
const remove = document.getElementById('rm');

console.log(add);
console.log(list);

// // add function
// add.onclick = function add() {
//   // we are going to create the list items here
//   const newItem = document.createElement("li");

//   // append
//   list.append(newItem);
//   // modify text content
//   newItem.textContent = todo.value;
// };

// TODO add remove button, I should probably append an etire dive with its button
// TODO update the style

// ! 2nd part
// add function
add.onclick = function add() {
  // we are going to create the list items here
  // ! 1- create the div
  const newItem = document.createElement("div");

  // append
  list.append(newItem);

  // ! 2- create the heaing
  const heading = document.createElement('h2');
  // append to the div 
  newItem.append(heading);
  heading.textContent = todo.value;

  // ! 3- create the remove button
  const removeBtn = document.createElement('button');
  newItem.append(removeBtn);
  removeBtn.textContent = 'remove';

  removeBtn.onclick = () => {
    newItem.remove();
    console.log('remove btn has been clicked');
  }
}



