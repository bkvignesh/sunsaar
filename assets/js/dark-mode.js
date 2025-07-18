const toggle = document.getElementById('mode-toggle');
const root = document.documentElement;

// Set theme on load
function setThemeOnLoad() {
  if (localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}
setThemeOnLoad();

if (toggle) {
  toggle.onclick = () => {
    root.classList.toggle('dark');
    localStorage.theme = root.classList.contains('dark') ? 'dark' : 'light';
  };
}