`use strict`;
const card = document.getElementById("card");
const invalidEmail = document.getElementById("invalid-email");
const left = document.getElementById("left");
const right = document.getElementById("right");
const form = document.getElementById("form");
const button = document.getElementById("submit-button");
const emailInput = document.getElementById("input-box");
const successPanel = document.getElementById("success-panel");
const userEmail = document.getElementById("user-email");
const dismissButton = document.getElementById("dismiss");

function validateEmail(email) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(email);
}

function formSuccess() {
  card.classList.add("hide");
  successPanel.classList.remove("hide");
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value;

  if (validateEmail(email)) {
    formSuccess();
    userEmail.innerText = email;
    emailInput.value = "";
    invalidEmail.classList.add("hide");
  } else {
    invalidEmail.classList.remove("hide");
    emailInput.classList.add("wrong");
  }
});

dismissButton.addEventListener("click", (e) => {
  e.preventDefault();
  successPanel.classList.add("hide");
  card.classList.remove("hide");
  emailInput.classList.remove("wrong");
});
