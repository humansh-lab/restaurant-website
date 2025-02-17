// Toggle mobile menu
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector("header nav ul").classList.toggle("show");
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const offset = 80; // Adjust based on navbar height
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
  
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
  
      // Remove active class from all links and add to the clicked one
      document.querySelectorAll("nav ul li a").forEach(link => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
  