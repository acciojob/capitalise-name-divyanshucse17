// Get the input field by its id
const inputField = document.getElementById("fname");

// Add blur event listener (fires when input loses focus)
inputField.addEventListener("blur", function () {
  this.value = this.value.toUpperCase();
});
