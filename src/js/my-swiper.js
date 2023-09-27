import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';



window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);
    }


    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  resizableSwiper(
    '(max-width: 767.98px)',
    '.brands__slider',
    {
      modules: [Pagination],
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 16
    }
  );

  resizableSwiper(
    '(max-width: 767.98px)',
    '.devices__slider',
    {
      modules: [Pagination],
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 16
    }
  );

  resizableSwiper(
    '(max-width: 767.98px)',
    '.prices__slider',
    {
      modules: [Pagination],
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 16
    }
  );
});
