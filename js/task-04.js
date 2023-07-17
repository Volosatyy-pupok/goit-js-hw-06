const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');
  const counterValueSpan = document.getElementById('value');

  let counterValue = 0;
  counterValueSpan.textContent = counterValue;

  function increment() {
    counterValue++;
    counterValueSpan.textContent = counterValue;
  }

  function decrement() {
    counterValue--;
    counterValueSpan.textContent = counterValue;
  }

  decrementButton.addEventListener('click', decrement);
  incrementButton.addEventListener('click', increment);