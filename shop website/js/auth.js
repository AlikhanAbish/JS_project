// Function to check session on page load
document.addEventListener("DOMContentLoaded", () => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      showWelcomeMessage(storedUsername);
    }
  });
  
  // Login function
  function login() {
    const username = document.getElementById("username").value;
    if (username) {
      localStorage.setItem("username", username);
      showWelcomeMessage(username);
    } else {
      alert("Please enter a username.");
    }
  }
  
  // Show welcome message and logout button
  function showWelcomeMessage(username) {
    document.getElementById("greeting").innerText = `Welcome, ${username}!`;
    document.getElementById("login-form").style.display = "none";
    document.getElementById("logout-section").style.display = "block";
  }
  
  // Logout function
  function logout() {
    localStorage.removeItem("username");
    document.getElementById("greeting").innerText = "Welcome";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("logout-section").style.display = "none";
  }
  