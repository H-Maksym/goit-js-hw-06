//TODO
/*
Напиши скрипт, який під час набору тексту в input input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо input порожній, у span повинен відображатися рядок "Anonymous".

*/

const textInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");


textInputEl.addEventListener("input", onTextInput);

const me = textInputEl.value;


function onTextInput(event) {
    event.currentTarget.value ? textOutputEl.textContent = event.currentTarget.value : textOutputEl.textContent = "Anonymous"
}

