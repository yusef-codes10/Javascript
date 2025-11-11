const list = document.querySelector('ul');
const btn = document.getElementById('btn');



btn.onclick = () => {
    // console.log('btn has been clicked');
    const newItem = document.createElement('div');
    const btnNew = document.createElement('button');
    btnNew.classList.add('button');
    newItem.append(btnNew);

    list.append(newItem);
    console.log('div has been created');




}