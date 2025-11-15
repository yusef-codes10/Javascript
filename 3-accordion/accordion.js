// Key Concepts for Project
// document.getElementByClassName()
// addEventListener()
// for loop
// this
// classlist.toggle()
const accordion = document.getElementsByClassName('content-container');

// ! we wanna access all classes with a for loop 
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => console.log('clicked'));
    
}