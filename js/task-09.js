//TODO ✅
/*
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

Для генерування випадкового кольору використовуй функцію getRandomHexColor.
*/


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnObj = {
  bodyEl: document.body,
  btnChangeColorEl: document.querySelector(".change-color"),
  colorEl: document.querySelector(".color"),
  counterEl: document.querySelector("#value"),

  counterValue: 0,

  onBtnClick() {
    const color = getRandomHexColor();
    this.bodyEl.style.backgroundColor = color;
    this.colorEl.textContent = color;
  },
}

btnObj.btnChangeColorEl.addEventListener('click', btnObj.onBtnClick.bind(btnObj));
