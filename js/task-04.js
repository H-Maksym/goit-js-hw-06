//TODO ✅
/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/


const btnObj = {
    btnDecrement: document.querySelector("[data-action='decrement']"),
    btnIncrement: document.querySelector("[data-action='increment']"),
    counterEl: document.querySelector("#value"),

    counterValue: 0,

    onBtnDecrement() {
        this.counterValue -= 1;
        this.counterEl.textContent = this.counterValue;
    },

    onBtnIncrement() {
        this.counterValue += 1;
        this.counterEl.textContent = this.counterValue;
    }
}

btnObj.btnDecrement.addEventListener('click', btnObj.onBtnDecrement.bind(btnObj));
btnObj.btnIncrement.addEventListener('click', btnObj.onBtnIncrement.bind(btnObj));

// function onBtnDecrement() {
//     btnObj.counterValue -= 1;
//     btnObj.counterEl.textContent = btnObj.counterValue;
// }

// function onBtnIncrement() {
//     btnObj.counterValue += 1;
//     btnObj.counterEl.textContent = btnObj.counterValue;
// }
