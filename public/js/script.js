const goBtn = document.getElementById("button-input");
const snackbar = document.getElementById("snackbar");
const snackbarText = document.getElementById("snackbar-text");

goBtn.addEventListener("click", function(event) {
    const msg = document.getElementById("message-input");
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