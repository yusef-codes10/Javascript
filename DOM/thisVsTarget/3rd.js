// we can't add an event listener to collection
const windows = document.querySelectorAll(".window");

windows.forEach((window) => {
  window.addEventListener("click", function (e) {
    console.log("window has been clicked");
    console.log(e.target);
    console.log(this);
  });
});
