// Obtener referencias a los elementos del formulario
const form = document.getElementById("survey-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("number");
const submitButton = document.getElementById("submit");

// Agregar un evento de escucha al enviar el formulario
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Validar los campos requeridos
  if (validateRequiredFields()) {
    // Si los campos son válidos, mostrar mensaje de confirmación
    alert("¡Gracias por completar la encuesta!");
    form.reset(); // Restablecer el formulario
  }
});

// Función para validar los campos requeridos
function validateRequiredFields() {
  let isValid = true;

  if (nameInput.value.trim() === "") {
    isValid = false;
    showError(nameInput, "Por favor, ingresa tu nombre");
  } else {
    hideError(nameInput);
  }

  if (emailInput.value.trim() === "") {
    isValid = false;
    showError(emailInput, "Por favor, ingresa tu correo electrónico");
  } else if (!isValidEmail(emailInput.value)) {
    isValid = false;
    showError(emailInput, "Por favor, ingresa un correo electrónico válido");
  } else {
    hideError(emailInput);
  }

  if (ageInput.value.trim() === "") {
    isValid = false;
    showError(ageInput, "Por favor, ingresa tu edad");
  } else if (!isValidAge(ageInput.value)) {
    isValid = false;
    showError(ageInput, "Por favor, ingresa una edad válida (entre 1 y 120)");
  } else {
    hideError(ageInput);
  }

  return isValid;
}

// Función para validar el formato de correo electrónico
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para validar la edad (entre 1 y 120)
function isValidAge(age) {
  const ageNumber = parseInt(age);
  return ageNumber >= 1 && ageNumber <= 120;
}

// Función para mostrar un mensaje de error debajo del campo
function showError(input, message) {
  const errorElement = document.createElement("p");
  errorElement.classList.add("error-message");
  errorElement.textContent = message;

  const parentElement = input.parentElement;
  parentElement.appendChild(errorElement);
}

// Función para ocultar el mensaje de error
function hideError(input) {
  const parentElement = input.parentElement;
  const errorElement = parentElement.querySelector(".error-message");
  if (errorElement) {
    parentElement.removeChild(errorElement);
  }
}

