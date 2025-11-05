(function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    setTheme(theme);
  } else {
    setTheme('light');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = [...document.body.classList]
    .find((cn) => cn.startsWith('theme_'))
    ?.replace('theme_', '');
  
  const themeButtons = [
    ...document.querySelectorAll('.header__theme-menu-button'),
  ];
  
  setActiveButton(themeButtons, currentTheme);

  themeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const themes = ['light', 'auto', 'dark'];
      const chosenTheme = themes[index];
      setTheme(chosenTheme);
      setActiveButton(themeButtons, chosenTheme);
    });
  });
});

function setTheme(theme) {
  document.body.classList.remove('theme_light', 'theme_auto', 'theme_dark');
  document.body.classList.add(`theme_${theme}`);
  localStorage.setItem('theme', theme);
}

function setActiveButton(buttonsArray, theme) {
  buttonsArray.forEach((button) => {
    button.classList.remove('header__theme-menu-button_active');
    button.removeAttribute('disabled');
  });
  
  const themes = ['light', 'auto', 'dark'];
  const buttonIndex = themes.indexOf(theme);
  
  if (buttonIndex !== -1 && buttonsArray[buttonIndex]) {
    buttonsArray[buttonIndex].classList.add('header__theme-menu-button_active');
    buttonsArray[buttonIndex].setAttribute('disabled', true);
  }
}