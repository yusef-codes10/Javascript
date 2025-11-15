// modal
// Key concepts for project
// document.getElementById()
// addEventListener()
// e.target
// CSS styling through JavaScript
// CSS Animation

const openBtn = document.getElementById("openBtn");
const popUp = document.querySelector(".pop-up");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", () => popUp.classList.toggle("hidden"));
closeBtn.addEventListener("click", () => popUp.classList.add("hidden"));

// ! click anywhere outside of the model to exist
window.addEventListener("click", (e) => {
  if (popUp.contains(e.target)) {
    popUp.classList.add("hidden");
    console.log("clicked");
  }
});
