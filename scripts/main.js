// Theme Toggle
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.setAttribute('data-theme', 'light');
    toggleButton.textContent = '☀️';
  } else {
    body.setAttribute('data-theme', 'dark');
    toggleButton.textContent = '🌙';
  }
});

// Default to light theme
body.setAttribute('data-theme', 'light');
