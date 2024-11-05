
// const colors = ['#FFFFFF', '#808080'];

// function getRandomColor() {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     return colors[randomIndex];
// }

// Load mode preference on page load
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

  

// const button = document.getElementById('colorButton');
// button.addEventListener('click', () => {
//     document.body.style.backgroundColor = getRandomColor();
// });

const questions = document.querySelectorAll('.faq-question');

        questions.forEach((question) => {
            question.addEventListener('click', function() {
                
                const answer = this.nextElementSibling;

                answer.classList.toggle('show');
            });
        });


const openPopupBtn = document.querySelector('.open-popup-btn');
        const popupOverlay = document.getElementById('popup-overlay');
        const closePopupBtn = document.getElementById('close-popup');
        const button1 = document.getElementsByClassName('btn-primary');

        openPopupBtn.addEventListener('click', () => {
            popupOverlay.style.display = 'flex';
        });

        closePopupBtn.addEventListener('click', () => {
            popupOverlay.style.display = 'none';
        });

        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });

        button1.addEventListener('click', () => {
            alert('Submitted successfully!')
        });


// const questions = document.querySelectorAll('.faq-question');

//     questions.forEach((question) => {
//         question.addEventListener('click', function() {
            
//             const answer = this.nextElementSibling;

//             answer.classList.toggle('show');
//         });
//     });



//  const openPopupBtn = document.querySelector('.open-popup-btn');
//  const popupOverlay = document.getElementById('popup-overlay');
//  const closePopupBtn = document.getElementById('close-popup');

//  openPopupBtn.addEventListener('click', () => {
//      popupOverlay.style.display = 'flex';
//  });

//  closePopupBtn.addEventListener('click', () => {
//      popupOverlay.style.display = 'none';
//  });

//  popupOverlay.addEventListener('click', (e) => {
//      if (e.target === popupOverlay) {
//          popupOverlay.style.display = 'none';
//      }
//  });