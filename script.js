function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

// Slideshow logic
const track = document.getElementById("slideshow-track");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("slideshow-dots");

let currentIndex = 0;
const totalSlides = slides.length;

// Create dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
}
const dots = dotsContainer.querySelectorAll("span");

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  const offset = -index * 100;
  track.style.transform = `translateX(${offset}%)`;
  updateDots();
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  goToSlide(currentIndex);
}

goToSlide(0); // Initialize
setInterval(autoSlide, 10000); // Slide every 10s
