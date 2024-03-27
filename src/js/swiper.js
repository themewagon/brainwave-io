import utils from './utils';

/*-----------------------------------------------
|  Swiper
-----------------------------------------------*/

const swiperInit = () => {
  if (window.Swiper) {
    const swipers = document.querySelectorAll('[data-swiper]');
    swipers.forEach(swiper => {
      const options = utils.getData(swiper, 'swiper');
      const newSwiper = new window.Swiper(swiper, {
        ...options
      });
      const navbarVerticalToggle = document.querySelector(
        '.navbar-vertical-toggle'
      );
      if (navbarVerticalToggle) {
        navbarVerticalToggle.addEventListener('navbar.vertical.toggle', () => {
          newSwiper.update();
        });
      }
    });
  }
};

export default swiperInit;
