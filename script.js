// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});

// Image Slider Functionality
const leftArrow = document.querySelector('.slider-nav.left');
const rightArrow = document.querySelector('.slider-nav.right');
const imageDisplay = document.querySelector('.image-display');
const images = ['assets/images/figma-screenshot1.png', 'assets/images/figma-screenshot2.png']; // Add more images as needed
let currentImageIndex = 0;

function updateImage() {
  imageDisplay.querySelector('img').src = images[currentImageIndex];
}

leftArrow.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
});

rightArrow.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
});
