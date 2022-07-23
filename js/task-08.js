//TODO
/*
Напиши скрипт управління формою логіна.

< form class="login-form" >
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form >

    Обробка відправлення форми form.login - form повинна відбуватися відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. 
Для доступу до елементів форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/

const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

const formData = [];

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements
  if (email.value === "" || password.value === "") {
    if (email.value === "") {
      alert("Всі поля повинні бути заповнені!\nВведіть e-mail!")
      return;
    }
    alert("Всі поля повинні бути заповнені!\nВведіть пароль!")
    return;
  }

  const objectData = {
    email: email.value,
    password: password.value,
  }

  formData.push(objectData)

  console.log("onFormSubmit", objectData)
  console.log("Введені дані:", formData);

  form.reset();
};


//Second Variant 🚀✔😊🌟 


// ! --------------------------- PATTERN COLLECTOR FORM---------------------
/*
function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget)
  const objectData = {};

  formData.forEach((value, name) => {
    if (value !== "") {
      objectData[name] = value
    }
  });

  const { email, password } = objectData;

  if (!email || !password) {
    if (!email) {
      alert("Всі поля повинні бути заповнені!\nВведіть e-mail!")
      return;
    }
    alert("Всі поля повинні бути заповнені!\nВведіть пароль!")
    return;
  }

  console.log("onFormSubmit", objectData)
  form.reset();
};

*/