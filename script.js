// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle theme
function changeTheme() {
  document.body.classList.toggle("dark-mode");
}

// Simple form handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon.");
});
