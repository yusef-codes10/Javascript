const box = document.querySelector('#box');
// const btn = document.querySelector('#btn');

box.addEventListener('click', function (e) {
    console.log(this);  // the box itsef
    console.log(e); // the event
    console.log(e.target);  // the button itself
})