const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  function updateName() {
    const name = nameInput.value.trim();

    if (name === '') {
      nameOutput.textContent = 'Anonymous';
    } else {
      nameOutput.textContent = name;
    }
}
  
  nameInput.addEventListener('input', updateName);