// we can't add an event listener to collection
const windows = document.querySelectorAll(".window");
// forEach Method
windows.forEach((window) => {
  window.addEventListener("click", function (e) {
    if (e.target.classList.contains('fa-xmark')) {
        this.classList.toggle('hidden');
    }
    console.log(e.target);
    console.log(this);
  });
});
