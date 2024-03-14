import utils from './utils';

/*-----------------------------------------------
|  Swiper
-----------------------------------------------*/

const swiperInit = () => {
  const navbarVerticalToggle = document.querySelector(
    '.navbar-vertical-toggle'
  );
  const swiper = document.querySelector('[data-swiper]');
  const options = utils.getData(swiper, 'swiper');
  const swiperNav = document.querySelector('.slider-nav');
  const newSwiper = new window.Swiper(swiper, {
    ...options,
    navigation: {
      nextEl: swiperNav?.querySelector('.next-button'),
      prevEl: swiperNav?.querySelector('.prev-button'),
    },
  });
  if (navbarVerticalToggle) {
    navbarVerticalToggle.addEventListener('navbar.vertical.toggle', () => {
      newSwiper.update();
    });
  }
};

export default swiperInit;
