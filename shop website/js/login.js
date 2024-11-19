document.addEventListener("DOMContentLoaded", () => {
    const mode = localStorage.getItem("theme") || "light";
    setMode(mode);
  });
  
  // Toggle function
  function toggleMode() {
    const currentMode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    const newMode = currentMode === "light" ? "dark" : "light";
    setMode(newMode);
  }
  
  // Set mode and store in localStorage
  function setMode(mode) {
    const body = document.body;
    const container = document.querySelector(".content-container");
    const toggleButton = document.getElementById("mode-toggle");
  
    if (mode === "dark") {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
      container.classList.add("dark-mode");
      container.classList.remove("light-mode");
      toggleButton.innerText = "Switch to Light Mode";
    } else {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
      container.classList.add("light-mode");
      container.classList.remove("dark-mode");
      toggleButton.innerText = "Switch to Dark Mode";
    }
  
    localStorage.setItem("theme", mode);
  }


function updateDateTime() {
    const now = new Date(); 
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true 
    };
    const formattedDate = now.toLocaleString('ru-RU', options); 
    document.getElementById('dateTime').innerText = formattedDate; 
}

updateDateTime();

const clickSound = new Audio('sounds/click-sound.mp3');

const button = document.getElementById('updateButton');

button.addEventListener('click', () => {
    updateDateTime();
    clickSound.play();
});


// document.getElementById('registrationForm').onsubmit = function(event) {
//     event.preventDefault(); 
//     let valid = true;

    
//     document.getElementById('emailError').textContent = '';
//     document.getElementById('passwordError').textContent = '';
//     document.getElementById('confirmPasswordError').textContent = '';

//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let confirmPassword = document.getElementById('confirmPassword').value;

//     if (email === "" || email.indexOf('@') === -1) {
//         document.getElementById('emailError').textContent = 'Please enter a valid email.';
//         valid = false;
//     }

//     if (password.length < 6) {
//         document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
//         valid = false;
//     }

//     if (password !== confirmPassword) {
//         document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
//         valid = false;
//     }

//     if (valid) {
//         alert('Form submitted successfully!');
//         this.submit();
//     }
// };

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
    const password = document.getElementById("password").value;
    if (username, password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      showWelcomeMessage(username);
    } else {
      alert("Please fill the filds.");
    }
  }
  
  // Show welcome message and logout button
  function showWelcomeMessage(username) {
    const greeting = document.getElementById("greeting");
    greeting.innerText = `Welcome, ${username}!`;
    greeting.style.color = "green"; // Установите любой цвет, например, синий
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
  
  