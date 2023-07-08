const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Función para enviar el mensaje del usuario
function sendMessage() {
  const userMessage = userInput.value;
  displayMessage('Tú', userMessage);
  userInput.value = '';

  // Llamar a la API de ChatGPT y obtener la respuesta
  // Aquí debes implementar tu lógica para obtener la respuesta de ChatGPT

  // Ejemplo de respuesta de prueba
  const escanorResponse = '¡Soy Escanor, el León del Orgullo!';

  // Mostrar la respuesta de Escanor
  displayMessage('Escanor', escanorResponse);
}

// Función para mostrar un mensaje en el chat
function displayMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${sender}: </strong>${message}`;
  chatMessages.appendChild(messageElement);
}

// Asignar evento al botón de enviar
sendButton.addEventListener('click', sendMessage);

// Asignar evento a la tecla Enter para enviar el mensaje
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
