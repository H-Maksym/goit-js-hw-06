//TODO ✅
/*
Напиши скрипт, який під час втрати фокусу на input (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Яка кількість символів повинна бути в input, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border input стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}

*/

const textInputEl = document.querySelector("#validation-input");


textInputEl.addEventListener("blur", onTextInputBlur);

function onTextInputBlur(event) {
  //на випадок якщо користувач взагалі нічого не вводив або очистив input.
  if (event.currentTarget.value.length === 0) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.remove("valid");
    return;
  }

  if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
    event.currentTarget.classList.replace("invalid", "valid");
    return;
  }

  if (event.currentTarget.value.length !== 0) {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
    return;
  }
}
