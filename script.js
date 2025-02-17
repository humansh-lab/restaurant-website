// Smooth scrolling and active class for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // Navbar Toggle for Mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('header nav ul');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
  