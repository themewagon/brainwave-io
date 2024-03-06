import { docReady } from './utils';
import detectorInit from './detector';
import navbarInit from './navbar';
import formValidationInit from './form-validation';
import swiperInit from './swiper';
import countupInit from './countup';
import scrollToTopInit from './scroll-to-top';
import videoControllerInit from './video-controller';
import accordionInit from './Accordion';
/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(navbarInit);
docReady(formValidationInit);
docReady(swiperInit);
docReady(countupInit);
docReady(scrollToTopInit);
docReady(videoControllerInit);
docReady(accordionInit);
