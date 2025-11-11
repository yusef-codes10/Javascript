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

    list.append(newItem);
    console.log('div has been created');




}