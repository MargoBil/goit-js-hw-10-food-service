import menu from './menu';
import templates from './templates.hbs';
import './styles.css';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector ('body');
const menuItems = document.querySelector ('.js-menu');
const inputChangeTheme = document.querySelector ('.js-switch-input');
console.log(body);
buildMenuItems (menu);
inputChangeTheme.addEventListener ('change', handleChangeTheme);
const feedback = localStorage.getItem ('theme');

// if (feedback === true) {
//   body.classList.remove (Theme.DARK);
//   body.classList.add (Theme.LIGHT);
// } else
//  body.classList.remove (Theme.LIGHT);
//  body.classList.add (Theme.DARK);

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

  localStorage.setItem (
    'theme',
    JSON.stringify (body.classList.contains (Theme.LIGHT))
  );
}

function buildMenuItems (items) {
  const murkup = items.map (item => templates (item));
  menuItems.insertAdjacentHTML ('beforeend', murkup.join (''));
}
