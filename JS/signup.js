function userSignUp(event) {
  // Prevent the default form submission / page refresh
  event.preventDefault();

  // 1. Get input elements and their values
  const name = document.getElementById("userName").value.trim();
  const email = document.getElementById("userEmail").value.trim();
  const password = document.getElementById("userPassword").value.trim();
  const confirmPassword = document
    .getElementById("userConfirmPassword")
    .value.trim();

  const messageDisplay = document.getElementById("message-display");

  // 2. Validate empty fields
  if (!name || !email || !password || !confirmPassword) {
    messageDisplay.innerHTML = "* Please fill in all fields!";
    messageDisplay.style.color = "#7a7aab";
    return;
  }

  // 3. Email format validation
  if (!email.includes("@")) {
    messageDisplay.innerHTML = "* Please enter a valid email address!";
    messageDisplay.style.color = "#7a7aab";
    return;
  }

  // 4. Check if passwords match
  if (password !== confirmPassword) {
    messageDisplay.innerHTML = "* Passwords do not match!";
    messageDisplay.style.color = "#cc3300";
    return;
  }

  // 5. Save credentials to localStorage
  localStorage.setItem("registeredName", name);
  localStorage.setItem("registeredEmail", email);
  localStorage.setItem("registeredPassword", password);

  // 6. Show success message and redirect to Login Page
  messageDisplay.innerHTML = "* Sign Up Successful! Redirecting to login...";
  messageDisplay.style.color = "#009926";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 3500);
}
