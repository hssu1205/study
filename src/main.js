document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("warning-btn");
  const warning = document.getElementById("warning-msg");

  button.addEventListener("click", () => {
    warning.classList.remove("hidden");
  });
});