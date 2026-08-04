// Run when the Dashboard page loads
document.addEventListener("DOMContentLoaded", () => {
  // 1. Get stored user credentials
  const storedEmail = localStorage.getItem("registeredEmail");
  const storedName = localStorage.getItem("registeredName");

  // 2. Auth Guard: Check if a user is logged in
  // If no registered email exists, send them back to the login page
  if (!storedEmail) {
    alert("You must log in to access the dashboard!");
    window.location.href = "login.html";
    return;
  }

  // 3. Display User Info on the Dashboard
  // Extract user name from email or format it for display
  const userDisplay = document.getElementById("welcomeUser");
  if (userDisplay) {
    userDisplay.innerText = `Welcome, ${storedName}!`;
  }
});

// Function to handle Log Out
function userLogOut() {
  // Clear stored session (Optional: use localStorage.removeItem("registeredEmail") if you want to clear credentials on logout)
  // Redirect back to login page
  window.location.href = "login.html";
}
