const list = document.querySelector("ul");
const btn = document.getElementById("btn");
const inputTask = document.querySelector("input");
const addContainer = document.querySelector(".add-container");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", mainFunc);
btn.addEventListener("click", createToDo);
// btn.addEventListener("click", createToDo);
function mainFunc() {
  // if (getUserInput() !== "") {
  // console.log('btn has been clicked');
  const newItem = document.createElement("div");
  newItem.classList.add("div");

  const btnNew = document.createElement("button");
  btnNew.classList.add("btn");
  newItem.append(btnNew);

  // the text
  const todoText = document.createElement("p");
  todoText.textContent = inputTask.value.trim();
  newItem.append(todoText);

  // remove icon
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn");
  newItem.append(removeBtn);

  // check icon
  const checkIcon = document.createElement("li");
  checkIcon.className = "bi bi-check";
  btnNew.appendChild(checkIcon);
  // check functionality
  btnNew.onclick = () => {
    if (todoText.style.textDecoration === "line-through") {
      todoText.style.textDecoration = "none";
    } else {
      todoText.style.textDecoration = "line-through";
    }
  };

  // create the icon
  const trashIcon = document.createElement("i");
  trashIcon.className = "bi bi-trash-fill";
  removeBtn.appendChild(trashIcon);
  // remove functionality
  removeBtn.onclick = () => {
    newItem.remove();
  };

  list.append(newItem);
  console.log("div has been created");
  addContainer.classList.remove("hidden");
}

// create a function for that
function createToDo() {
  // remove the hidden class
  addContainer.classList.toggle("hidden");
}

