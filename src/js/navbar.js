/*-----------------------------------------------
|  Navbar
-----------------------------------------------*/

const navbarInit = () => {
  const navbar = document.querySelector('[data-navbar-soft-on-scroll]');

  if (navbar) {
    const windowHeight = window.innerHeight;
    const handleAlpha = () => {
      const scrollTop = window.scrollY;
      let alpha = (scrollTop / windowHeight) * 8;
      alpha >= 1 && (alpha = 1);
      navbar.style.backgroundColor = `rgba(49, 60, 89, ${alpha})`;
    };
    handleAlpha();
    document.addEventListener('scroll', () => handleAlpha());
  }
};

export default navbarInit;
