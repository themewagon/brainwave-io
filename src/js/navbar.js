/*-----------------------------------------------
|  Navbar
-----------------------------------------------*/

const navbarInit = () => {
  const navbar = document.querySelector('[data-navbar-soft-on-scroll]');

  if (navbar) {
    const windowHeight = window.innerHeight;
    const handleAlpha = () => {
      const scrollTop = window.scrollY;
      let alpha = (scrollTop / windowHeight) * 6;
      alpha >= 1 && (alpha = 1);
      navbar.style.backgroundColor = `rgba(49, 60, 89, ${alpha})`;
    };
    handleAlpha();
    document.addEventListener('scroll', () => handleAlpha());
  }

  const navbarNav = document.querySelector('[data-navbar-nav]');
  navbarNav.addEventListener('click', (event) => {
    if (event.target.closest('li')) {
      const navbarToggler = document.querySelector('[data-bs-toggle]');
      const navbarItemContainer = document.querySelector('[data-navbar-collapse]');
      navbarToggler.setAttribute('aria-expanded', false);
      navbarItemContainer.classList.remove('show');
      navbarToggler.classList.add('collapsed');
    }
  });
};

export default navbarInit;
