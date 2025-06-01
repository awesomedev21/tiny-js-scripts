// emoji-rain.js
(function createEmojiRain() {
    const emojis = ['🌟', '✨', '💖', '🎉', '🎈', '💫', '🔥'];
    const emojiContainer = document.createElement('div');
    emojiContainer.style.position = 'fixed';
    emojiContainer.style.top = '0';
    emojiContainer.style.left = '0';
    emojiContainer.style.width = '100%';
    emojiContainer.style.height = '100%';
    emojiContainer.style.pointerEvents = 'none';
    emojiContainer.style.zIndex = '9999';
    document.body.appendChild(emojiContainer);

    function createEmoji() {
        const emoji = document.createElement('div');
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'absolute';
        emoji.style.fontSize = `${Math.random() * 24 + 24}px`;
        emoji.style.top = '0';
        emoji.style.left = `${Math.random() * 100}%`;
        emoji.style.animation = `emoji-fall ${Math.random() * 3 + 3}s linear`;
        emojiContainer.appendChild(emoji);

        setTimeout(() => emoji.remove(), 7000);
    }

    setInterval(createEmoji, 300);

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes emoji-fall {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
    `;
    document.head.ap
