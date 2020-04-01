const inputContainer = document.getElementById("input-container")
const snackbar = document.getElementById("snackbar");
const snackbarText = document.getElementById("snackbar-text");

inputContainer.addEventListener("submit", function(event) {
  event.preventDefault();
    const msg = document.getElementById("message-field");
    let message = msg.value;
    if(message.length > 0) {
        showSnackbar(message);
    } else {
        showSnackbar("Message goes here!");
    }
}); 

function showSnackbar(message) {
  snackbarText.innerHTML = message;
  snackbarVisible();
}

function snackbarVisible() {
  snackbar.classList.add("snackbar-visible");
  setTimeout(function() {
    snackbar.classList.remove("snackbar-visible");
  }, 2500);
}