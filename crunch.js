const snackbar = document.getElementById("snackbar");
const snackbarText = document.getElementById("snackbar-text");

function showSnackbar(message, backgroundColor, textColor) {
  snackbarText.innerHTML = message;
  snackbar.style.backgroundColor = backgroundColor;
  snackbar.style.color = textColor;
  snackbarVisible();
}

function snackbarVisible() {
  snackbar.classList.add("snackbar-visible");
  setTimeout(function() {
    snackbar.classList.remove("snackbar-visible");
  }, 2500);
}