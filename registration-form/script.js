document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputs = document.querySelectorAll("input");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;
    let firstEmptyField = null;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        valid = false;
        if (!firstEmptyField) {
          firstEmptyField = input;
        }
      } else {
        input.style.border = "1px solid #ccc";
      }
    });

    if (!valid) {
      alert("Please fill in all the required fields.");
      firstEmptyField.focus();
      return;
    }

    // If all fields are filled
    alert("Registration Successful!");
    form.reset();
  });

  // Optional: remove red border on input
  inputs.forEach(input => {
    input.addEventListener("input", function () {
      if (input.value.trim() !== "") {
        input.style.border = "1px solid #ccc";
      }
    });
  });
});
