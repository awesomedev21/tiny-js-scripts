function launchConfetti(duration = 3000) {
  const confetti = document.createElement('div');
  confetti.style.position = 'fixed';
  confetti.style.top = '0';
  confetti.style.left = '0';
  confetti.style.width = '100%';
  confetti.style.height = '100%';
  confetti.style.pointerEvents = 'none';
  confetti.style.overflow = 'hidden';
  document.body.appendChild(confetti);

  const colors = ['#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f'];
  const total = 150;

  for (let i = 0; i < total; i++) {
    const piece = document.createElement('div');
    piece.style.position = 'absolute';
    piece.style.width = '10px';
    piece.style.height = '10px';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `-${Math.random() * 20}px`;
    piece.style.opacity = Math.random().toString();
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.animation = `fall ${2 + Math.random() * 3}s ease-out forwards`;
    confetti.appendChild(piece);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  setTimeout(() => {
    confetti.remove();
    style.remove();
  }, duration);
}

// Example trigger:
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.textContent = 'Celebrate!';
  btn.onclick = () => launchConfetti();
  document.body.appendChild(btn);
});
