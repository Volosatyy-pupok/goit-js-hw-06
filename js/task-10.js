function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    function createBoxes(amount) {
      const boxesContainer = document.getElementById('boxes');

      for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
      }
    }

    function destroyBoxes() {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = '';
    }

    const createButton = document.querySelector('[data-create]');
    createButton.addEventListener('click', () => {
      const amountInput = document.getElementById('amountInput');
      const amount = parseInt(amountInput.value);
      createBoxes(amount);
    });

    const destroyButton = document.querySelector('[data-destroy]');
    destroyButton.addEventListener('click', destroyBoxes);