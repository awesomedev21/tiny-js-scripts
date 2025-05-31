// dark-mode-toggle.js

(function () {
  const toggleId = 'dark-mode-toggle';
  const darkClass = 'dark-mode';

  // Create toggle button
  const button = document.createElement('button');
  button.id = toggleId;
  button.innerText = '🌙 Toggle Dark Mode';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.zIndex = 1000;
  button.style.padding = '10px';
  button.style.background = '#333';
  button.style.color = '#fff';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';

  // Toggle dark mode
  button.addEventListener('click', () => {
    document.body.classList.toggle(darkClass);
    localStorage.setItem('dark-mode', document.body.classList.contains(darkClass));
  });

  // Apply dark mode on load if previously set
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add(darkClass);
  }

  // Dark mode styles
  const style = document.createElement('style');
  style.innerText = `
    .${darkClass} {
      background-color: #121212;
      color: #e0e0e0;
    }
    .${darkClass} a { color: #bb86fc; }
    .${darkClass} button { background-color: #1f1f1f; color: #e0e0e0; }
  `;

  document.head.appendChild(style);
  document.body.appendChild(button);
})();
