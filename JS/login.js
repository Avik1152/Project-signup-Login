function userLogIn(event) {
  // Prevent the default form submission / page refresh
  event.preventDefault();

  // 1. Get input elements and their values
  const userInputName = document.getElementById("userName").value.trim();
  const userInputEmail = document.getElementById("userEmail").value.trim();
  const userInputPassword = document
    .getElementById("userPassword")
    .value.trim();

  // 2. Retrieve credentials saved during Sign-Up
  const storedName = localStorage.getItem("registeredName");
  const storedEmail = localStorage.getItem("registeredEmail");
  const storedPassword = localStorage.getItem("registeredPassword");

  const messageDisplay = document.getElementById("message-display");

  // 3. Validate empty fields
  if (!userInputName || !userInputEmail || !userInputPassword) {
    messageDisplay.innerHTML = "* Please fill all fields!";
    messageDisplay.style.color = "#7a7aab";
    return;
  }

  // 4. Email format validation
  if (!userInputEmail.includes("@")) {
    messageDisplay.innerHTML = "* Please enter a valid email address!";
    messageDisplay.style.color = "#7a7aab";
    return;
  }

  // 5. Check if any account exists in localStorage
  if (!storedEmail || !storedPassword) {
    messageDisplay.innerHTML = "* No account found. Please Sign Up first!";
    messageDisplay.style.color = "#cc3300";
    return;
  }

  // 6. Simulate a simple credential check
  if (userInputEmail === storedEmail && userInputPassword === storedPassword) {
    messageDisplay.innerHTML = "* Login Successful!...";
    messageDisplay.style.color = "#009926";

    // Optional: Redirect to your dashboard or homepage
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 4000);
    return;
    // Redirect or do next steps here
  } else {
    messageDisplay.innerHTML = "* Invalid email or password. Please try again.";
    messageDisplay.style.color = "#cc3300";
    return;
  }
}
