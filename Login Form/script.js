function validateForm() {
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");
  let errorDiv = document.getElementById("error");

  if (!validateEmail(emailInput.value)) {
    errorDiv.innerText = "Invalid email address";
    return false;
  }

  if (passwordInput.value.length < 8) {
    errorDiv.innerText = "Password must be at least 8 characters long";
    return false;
  }

  return true;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
