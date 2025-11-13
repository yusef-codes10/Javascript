const userInput = document.getElementById("userInput");
const addTask = document.getElementById("addTask");
addTask.addEventListener("click", addTaskFunction);

function addTaskFunction() {
  // create a div
  const taskItem = document.createElement("div");
  const taskContainer = document.querySelector(".task-container");

  // create a p tag inside
  const taskPar = document.createElement("p");
  taskPar.classList.add("new-item");

  taskPar.innerHTML = "hello there";
  taskContainer.append(taskPar);

  taskContainer.append(taskItem);
}


// todo paused for later