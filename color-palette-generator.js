const paletteContainer = document.getElementById('palette');

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function createPalette() {
    paletteContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        const color = getRandomColor();
        colorBox.style.background = color;
        colorBox.textContent = color;
        colorBox.dataset.locked = 'false';

        colorBox.addEventListener('click', () => {
            const isLocked = colorBox.dataset.locked === 'true';
            colorBox.dataset.locked = !isLocked;
            colorBox.classList.toggle('locked', !isLocked);
        });

        paletteContainer.appendChild(colorBox);
    }
}

function regeneratePalette() {
    const colorBoxes = document.querySelectorAll('.color-box');
    colorBoxes.forEach(box => {
        if (box.dataset.locked === 'false') {
            const newColor = getRandomColor();
            box.style.background = newColor;
            box.textContent = newColor;
        }
    });
}

document.addEventListener('keydown', e => {
    if (e.code === 'Space') {
        regeneratePalette();
    }
});

createPalette();
