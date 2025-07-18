const toggle = document.getElementById('mode-toggle');
const root   = document.documentElement;

// Load choice
if (localStorage.theme === 'dark') root.classList.add('dark');

toggle.onclick = () => {
  root.classList.toggle('dark');
  localStorage.theme = root.classList.contains('dark') ? 'dark' : 'light';
};