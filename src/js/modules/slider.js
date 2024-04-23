import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/scss';
import 'swiper/scss/navigation';

export const slider = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    navigation: {
      nextEl: '.reviews__btn_next',
      prevEl: '.reviews__btn_prev',
    },

    // slidesPerView: 3,
    // spaceBetween: 30,
    loop: false,
    // keyboard: {
    //   enabled: true,
    //   // onlyInViewport: false,
    // },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      520: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      940: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
};
