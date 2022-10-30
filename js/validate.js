const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const businessemail = document.getElementById("businessemail");
const company = document.getElementById("company");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});
