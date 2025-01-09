import { Swiper } from './swiper-bundle.min.mjs';
//
// const swiper = new Swiper('.swiper', {
//   slidesPerView: 1,
//   autoplay: true,
//   delay: 7000,
//   direction: 'horizontal',
//   loop: true,
//
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';
// import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  autoplay: true,
  delay: 7000,
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
