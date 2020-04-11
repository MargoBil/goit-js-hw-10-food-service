import menu from '../data/menu.json';
import templates from '../templates/templates.hbs';
import '../styles/styles.css';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector ('body');
const menuItems = document.querySelector ('.js-menu');
const inputChangeTheme = document.querySelector ('.js-switch-input');

buildMenuItems (menu);

inputChangeTheme.addEventListener ('change', handleChangeTheme);

const feedback = JSON.parse (localStorage.getItem ('theme'));
const activeChecked = localStorage.getItem ('checked');

getActiveTheme ();

function getActiveTheme () {
  if (feedback === 'dark-theme') {
    body.classList.add (Theme.DARK);
    inputChangeTheme.checked = activeChecked;
  } else body.classList.add (Theme.LIGHT);
}

function handleChangeTheme (event) {
  switch (event.target.checked) {
    case false:
      body.classList.remove (Theme.DARK);
      body.classList.add (Theme.LIGHT);
      break;
    case true:
      body.classList.remove (Theme.LIGHT);
      body.classList.add (Theme.DARK);
      break;
  }
  localStorage.setItem ('theme', JSON.stringify (body.className));
  localStorage.setItem ('checked', inputChangeTheme.checked);
}

function buildMenuItems (items) {
  const murkup = items.map (item => templates (item));
  menuItems.insertAdjacentHTML ('beforeend', murkup.join (''));
}
