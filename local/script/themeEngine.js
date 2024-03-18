//#
//# Vault - Auxiliary - Theme Engine (vTE) v1
//#
var root = document.querySelector(':root');
var logo = document.getElementById('nav-logo');
var body = document.querySelector('body');
var footer = document.getElementsByClassName('footer');
var storedTheme = localStorage.getItem('theme');
var themeMenu = document.getElementById('theme-dropdown');
console.log('🆅🆃🅴 Theme from your previous session is '+storedTheme);
if (storedTheme === null) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeSwitch('dark');
  } else {
    themeSwitch('light');
  }
} else {
  themeSwitch(storedTheme);
}

function toggleThemeMenu() {
  themeMenu.classList.toggle('show');
}

function resetThemeMenu() {
  let allThemes = ['dark', 'light', 'oled', 'srcery'];
  for (theme of allThemes) {
    document.getElementById('theme-'+theme).innerHTML = theme.charAt(0).toUpperCase() + theme.slice(1);
  }
}

function resetLocalTheme() {
  localStorage.removeItem('theme');
  console.log('🆅🆃🅴 localStorage reset');
}

function themeSwitch(themeToSwitch) {
  var head = document.head;
  document.documentElement.classList.add('color-theme-in-transition');
  document.documentElement.setAttribute('data-theme', themeToSwitch);
  var icon = document.getElementById('theme-icon');
  var nav = document.getElementsByClassName('nav-menu')[0];
  themeName = themeToSwitch.charAt(0).toUpperCase() + themeToSwitch.slice(1);
  resetThemeMenu();
  document.getElementById('theme-'+themeToSwitch).innerHTML = themeName + '<svg viewBox="0 0 20 20" width="1.2em" height="1.2em" fill="var(--text_secondary)"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>';
  if (themeToSwitch === 'srcery') {
    var filters = 'invert(25%) sepia(90%) saturate(2606%) hue-rotate(322deg) brightness(91%) contrast(70%)';
    logo.style.filter = filters;
    nav.style.filter = filters;
    footer[0].style.backgroundImage = 'none';
    icon.style.filter = 'invert(72%) sepia(12%) saturate(770%) hue-rotate(1deg) brightness(90%) contrast(94%)';
    body.style.backgroundBlendMode = 'color-dodge';
    head.innerHTML += '<meta name="theme-color" content="#2d2c29">';
  } else if (themeToSwitch === 'light') {
    var filters = 'invert(9%) sepia(92%) saturate(6219%) hue-rotate(330deg) brightness(75%) contrast(100%)';
    logo.style.filter = filters;
    nav.style.filter = filters;
    footer[0].style.backgroundImage = 'url(/highRES/local/footer-background.svg)';
    icon.style.filter = 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)';
    body.style.backgroundBlendMode = 'color-dodge';
    head.innerHTML += '<meta name="theme-color" content="#f3f4f6">';
  } else if (themeToSwitch === 'oled') {
    var filters = 'invert(13%) sepia(49%) saturate(7396%) hue-rotate(334deg) brightness(68%) contrast(91%)';
    logo.style.filter = filters;
    nav.style.filter = filters;
    footer[0].style.backgroundImage = 'none';
    icon.style.filter = 'invert(55%) sepia(0%) saturate(81%) hue-rotate(199deg) brightness(91%) contrast(85%)';
    body.style.backgroundBlendMode = 'overlay';
    head.innerHTML += '<meta name="theme-color" content="#000000">';
  } else {
    var filters = 'invert(17%) sepia(82%) saturate(5371%) hue-rotate(336deg) brightness(97%) contrast(112%)';
    logo.style.filter = filters;
    nav.style.filter = filters;
    footer[0].style.backgroundImage = 'url(/highRES/local/footer-background.svg)';
    icon.style.filter = 'invert(55%) sepia(0%) saturate(81%) hue-rotate(199deg) brightness(91%) contrast(85%)';
    body.style.backgroundBlendMode = 'normal';
    head.innerHTML += '<meta name="theme-color" content="#181818">';
  }
  window.setTimeout(function() {
    document.documentElement.classList.remove('color-theme-in-transition')
  }, 1250)
  document.getElementById('current-theme').textContent = themeName;
  icon.src = '/highRES/local/theme/'+themeToSwitch+'.svg';
  localStorage.setItem('theme', themeToSwitch);
  document.getElementById('theme-dropdown').classList.remove('show');
  console.log('🆅🆃🅴 Theme has been set to '+themeToSwitch);
}