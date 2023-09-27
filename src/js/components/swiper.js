new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    735: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1151: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
});
