//TODO ✅
/*
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.


Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/


// function getRandomHexColor() {
//   return `#${Math.round(Math.random() * 16777215).toString(16)}`;
// }


// Функція може давати збій ⛔
// Пр: генерує Math.floor((Math.random() * 16777215)) ➡  110102; ⛔
//  (110102).toString(16) ➡  #1ae16 ; ⛔
// #1ae16 колір не знаходить https://encycolorpedia.com.ua/search?q=%231ae16


// 🚀 реалізував іншу функцію з альфа-каналом.

function getRandomRgbColor() {
  return `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.random()}`;
}


const inputEl = document.querySelector("#controls").firstElementChild;
const divBoxesEl = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]")
const btnDestroy = document.querySelector("[data-destroy]")


btnCreate.addEventListener('click', () => createBoxes(inputEl.value));
btnDestroy.addEventListener('click', () => { divBoxesEl.innerHTML = ""; inputEl.value = "" })


const createBoxes = (amount) => {
  amount = Number(amount);
  const arrayDiv = [];
  let width = 20;
  let height = 20;

  for (let i = 1; i <= amount; i += 1) {

    if (divBoxesEl.lastElementChild) {
      width = parseInt(divBoxesEl.lastElementChild.style.width)
      height = parseInt(divBoxesEl.lastElementChild.style.width)
    }

    const divBoxes = document.createElement('div');
    divBoxes.style.width = (width + i * 10) + "px";
    divBoxes.style.height = (height + i * 10) + "px";
    divBoxes.style.backgroundColor = getRandomRgbColor();
    arrayDiv.push(divBoxes);
  }

  return divBoxesEl.append(...arrayDiv);

}






