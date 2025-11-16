// Key Concepts for Project
// document.getElementByClassName()
// addEventListener()
// for loop
// this
// classlist.toggle()
const questions = document.getElementsByClassName('question');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
        // ! can't use this with arrow functions
        const content = this.nextElementSibling;  // the content-container
        content.classList.toggle('active');
    });
}


// todo I have to repeat this cuz it makes no sense !