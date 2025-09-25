const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicatorsContainer = document.querySelector(".slider-indicators");

let currentIndex = 0;

// Create indicators
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(i));
  indicatorsContainer.appendChild(dot);
});

const indicators = indicatorsContainer.querySelectorAll("span");

function showSlide(index) {
  // Remove current active
  slides[currentIndex].classList.remove("active");
  indicators[currentIndex].classList.remove("active");

  // Update index
  currentIndex = (index + slides.length) % slides.length;

  // Add new active
  slides[currentIndex].classList.add("active");
  indicators[currentIndex].classList.add("active");

  // Move slider
  document.querySelector(".slides").style.transform = `translateX(-${currentIndex * 100}%)`;

  // Run count up animation for this slide
  let counterId = `years${currentIndex + 1}`;
  let counterElement = document.getElementById(counterId);
  if (counterElement) {
    counterElement.textContent = "0"; // reset before animation
    countUp(counterId, 9, 2000);
  }
}

prev.addEventListener("click", () => showSlide(currentIndex - 1));
next.addEventListener("click", () => showSlide(currentIndex + 1));

// Auto slide
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);

// Animate count up effect
function countUp(elementId, target, duration) {
  let element = document.getElementById(elementId);
  let start = 0;
  let increment = target / (duration / 50);
  let counter = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(counter);
    }
    element.textContent = Math.floor(start);
  }, 50);
}

// Run animation on page load for first slide
document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
});
