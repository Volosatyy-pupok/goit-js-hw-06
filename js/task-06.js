const inputElement = document.getElementById("validation-input");

  inputElement.addEventListener("blur", () => {
    const enteredValue = inputElement.value;
    const expectedLength = inputElement.getAttribute("data-length");

    if (enteredValue.length === parseInt(expectedLength)) {
      inputElement.classList.remove("invalid");
      inputElement.classList.add("valid");
    } else {
      inputElement.classList.remove("valid");
      inputElement.classList.add("invalid");
    }
  });