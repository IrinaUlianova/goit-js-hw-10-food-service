import foodServiceTpl from '../templates/food-service.hbs';

import cards from '../menu.json';
// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
const menuItemsRef = document.querySelector('.js-menu');
console.log(menuItemsRef);
const checkboxRef = document.querySelector('#theme-switch-toggle');
console.log(checkboxRef);
const bodyRef = document.querySelector('body');

// зарендила шаблон в разметку
menuItemsRef.insertAdjacentHTML('beforeend', createMenuCards(cards));
function createMenuCards(cards) {
  return foodServiceTpl(cards);
}

// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// По умолчанию тема светлая.
let themeColor = localStorage.getItem('theme-color') || Theme.LIGHT;
document.body.classList.add(themeColor);

if (themeColor === Theme.DARK) {
  checkboxRef.checked = true;
}

//  cлушатель события
checkboxRef.addEventListener('change', onCheckboxThemeChange);

// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
function onCheckboxThemeChange(event) {
  if (!event.target.checked) {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.DARK);
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
  }
}
