// Get all the slides
const slides = document.querySelectorAll('.slideshow .slide');

// Set the initial active slide index
let currentSlide = 0;

// Function to show the next slide
function nextSlide() {
    // Remove 'active' class from the current slide
    slides[currentSlide].classList.remove('active');
    
    // Increment the slide index, looping back to the first slide if necessary
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add 'active' class to the next slide
    slides[currentSlide].classList.add('active');
}

// Automatically change the slides every 5 seconds (5000 ms)
setInterval(nextSlide, 5000);

// Initialize the first slide as active when the page loads
document.addEventListener('DOMContentLoaded', () => {
    slides[0].classList.add('active');
});


// Navbar toggle for mobile
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}

// Adding scroll effect for blurry navbar
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
