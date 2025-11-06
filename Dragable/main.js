// here is the main code

// !1- setting some starting cordanants
let newX = 0,
  newY = 0,
  startX = 0,
  startY = 0;

// !2- declaring the card element in JS
const card = document.getElementById("card");

card.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
  startX = e.clientX;
  startY = e.clientY;

  card.addEventListener("mousemove", mouseMove);
  card.addEventListener("mouseup", mouseUp);

}

function mouseMove(e) {
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY

    card.style.top = startY + 'px'
    card.style.left = startX + 'px'

    console.log({newX, newY})
    console.log({startX, startY})




}