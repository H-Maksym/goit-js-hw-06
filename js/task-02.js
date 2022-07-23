//TODO ✅
/*
HTML містить порожній список ul#ingredients.

<ul id="ingredients"></ul>
JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі < li > за одну операцію у список ul#ingredients.
*/
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');


function itemMarkup(value) {
  const itemMarkup = document.createElement('li');
  itemMarkup.classList.add('item');
  itemMarkup.textContent = value;
  return itemMarkup;
}

const listMarkup = ingredients.map(itemMarkup);

listEl.append(...listMarkup);


// const listMarkup = ingredients.map(elem => {
//   const listItem = document.createElement('li');
//   listItem.classList.add('item');
//   listItem.textContent = elem;
//   return listItem;
// });
