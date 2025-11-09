const add = document.getElementById("btn");
const list = document.querySelector("ul");
const todo = document.getElementById("text");

console.log(add);
console.log(list);

// add function
add.onclick = function add() {
  // we are going to create the list items here
  const newItem = document.createElement("li");

  // append
  list.append(newItem);
  // modify text content
  newItem.textContent = todo.value;
};

// TODO add remove button, I should probably append an etire dive with its button
// TODO update the style
