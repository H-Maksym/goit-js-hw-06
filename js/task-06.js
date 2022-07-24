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

function switchCssClass(objEl, addClassCss, removeClassCss) {
  objEl.classList.add(addClassCss);
  objEl.classList.remove(removeClassCss);
}

function deleteCssClass(objEl, ...rest) {
  objEl.classList.remove(...rest);
}

function onTextInputBlur(event) {
  //на випадок якщо користувач взагалі нічого не вводив або очистив input.
  if (event.currentTarget.value.length === 0) {
    deleteCssClass(event.currentTarget, "invalid", "valid")
    return;
  }

  if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
    switchCssClass(event.currentTarget, "valid", "invalid")
    return;
  }

  if (event.currentTarget.value.length !== 0) {
    switchCssClass(event.currentTarget, "invalid", "valid")
    return;
  }
}


