// Toggle Navbar Menu
function toggleMenu() {
    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('show');
  }
  
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });
  