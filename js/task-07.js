//TODO ✅
/*
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

*/

const textInputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = `${textInputEl.value}px`;


textInputEl.addEventListener("input", onTextSize);

console.log(textInputEl.value);
function onTextSize(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}
