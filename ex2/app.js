const messageElement = document.getElementById("message");
const button = document.getElementById("changeTextBtn");

// Add an event listener to the button
button.addEventListener("click", () => {
  messageElement.textContent = "Hello, World!";
});
