const h1 = document.querySelector('h1');
const addButton = document.querySelector('.add');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const li = document.querySelector('li');
const form = document.querySelector('form');
const LS_key = "list";

let toDos = [];

function exitList(){
    localStorage.clear();
    location.href='./index.html';
}

function clickDeleteButton(event){
    const button = event.target.parentNode;
    const li = button.parentNode;
    ul.removeChild(li);

    const removeList = toDos.filter(function filterFn(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = removeList;
    saveList();
}

function clickCheckButton(event){
    const button = event.target.parentNode;
    const li = button.parentNode;
    li.setAttribute('class', 'checked');
}

function saveList(){
    localStorage.setItem(LS_key, JSON.stringify(toDos));
}

function printList(text){
    const temp = document.createElement('li');
    const deleteButton = document.createElement('button');
    const checkButton = document.createElement('button');
    let delStr = '<img src="./image/delete.png">';
    let checkStr = '<img src="./image/check.png">';
    let newId = toDos.length + 1;
    deleteButton.innerHTML = delStr;
    checkButton.innerHTML = checkStr;
    deleteButton.setAttribute('class', 'delete');
    checkButton.setAttribute('class', 'check');
    checkButton.addEventListener('click', clickCheckButton);
    deleteButton.addEventListener('click', clickDeleteButton);
    temp.setAttribute('id', newId);
    temp.innerHTML = text;
    temp.appendChild(checkButton);
    temp.appendChild(deleteButton);
    ul.appendChild(temp);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveList();
    
}

function handleClick(){
    const currentValue = input.value;
    printList(currentValue);
    input.value = "";
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    printList(currentValue);
    input.value = "";
}

function loadList(){
    const list = localStorage.getItem(LS_key);
    if(list !== null){
        const parsedToDos = JSON.parse(list);
        parsedToDos.forEach(function(toDo){
            printList(toDo.text);
        })
    }
}

function loadH1(){
    const name = localStorage.getItem('name');
    const exitButton = document.createElement('button');
    let exitStr = '<img src="./image/exit.png">';
    exitButton.setAttribute('class', 'exit');
    exitButton.innerHTML = exitStr;
    if(name !== null){
        h1.innerText = `${name}'s TO DO LIST`;
        h1.appendChild(exitButton);
    }
    exitButton.addEventListener('click', exitList);
}

function init(){
    loadH1();
    loadList();
    form.addEventListener('submit', handleSubmit);
    addButton.addEventListener('click', handleClick);
}

init();