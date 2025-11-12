const list = document.querySelector("ul");
const btn = document.getElementById("btn");

btn.addEventListener("click", mainFunc);
btn.addEventListener("click", createToDo);
function mainFunc() {
  // console.log('btn has been clicked');
  const newItem = document.createElement("div");
  newItem.classList.add("div");

  const btnNew = document.createElement("button");
  btnNew.classList.add("btn");
  newItem.append(btnNew);

  // // create a new input
  // const inputDiv = document.createElement('div');
  // inputDiv.classList.add('div');
  // inputDiv.style.backgroundColor = 'red';
  // newItem.append(inputDiv);
  // the text
  const todoText = document.createElement("p");
  todoText.textContent = "You have to do it";
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
}

// todo check btn | rename, add toggle functionality
// todo add icons for the buttons
// todo add a text input to add your plan
// todo style the website
// todo add overflow function

// create a function for that
function createToDo() {
  console.log("it has been created");
  const container = document.querySelector(".to-do-container");

  // create a new container
  const addWindow = document.createElement("div");
  addWindow.classList.add("add-container");
  container.append(addWindow);
}
