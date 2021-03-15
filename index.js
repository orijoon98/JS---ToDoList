const button = document.querySelector('button');
const input = document.querySelector('input');
const form = document.querySelector('form');
const LS_key = 'name';

function saveName(){
    const name = input.value;
    localStorage.setItem(LS_key, name);
    location.href='./list.html';
}

function handleSubmit(event) {
    event.preventDefault();
    saveName();
}

function init() {
    form.addEventListener('submit', handleSubmit);
}

init();
