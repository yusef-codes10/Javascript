const list = document.querySelector('ul');
const btn = document.getElementById('btn');



btn.onclick = () => {
    // console.log('btn has been clicked');
    const newItem = document.createElement('div');
    newItem.style.backgroundColor = 'red';
    newItem.classList.add('div');

    const btnNew = document.createElement('button');
    btnNew.classList.add('btn');
    newItem.append(btnNew);

    // the text
    const todoText = document.createElement('p');
    todoText.textContent = 'You have to do it';
    newItem.append(todoText);

    // remove icon
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn');
    newItem.append(removeBtn);

    // check functionality
    btnNew.onclick = () => {
        todoText.style.textDecoration = 'line-through';
    }
    
    // remove functionality
    removeBtn.onclick = () => {
        newItem.remove();
    }

    list.append(newItem);
    console.log('div has been created');




}


// todo check btn | rename, add toggle functionality
// todo add icons for the buttons
// todo add a text input to add your plan
// todo style the website
// todo add overflow function