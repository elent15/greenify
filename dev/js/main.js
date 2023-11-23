// burger-menu
const burger = () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuItems = document.querySelectorAll('.item-js');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');

    if (menu.classList.contains('header__nav--active')) {
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Закрыть меню');
      document.body.classList.add('stop-scroll');
    } else {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      document.body.classList.remove('stop-scroll');
    }
  });

  document.addEventListener('click', (el) => {
    const target = el.target;
    const itsMenu = target == menu || menu.contains(target);
    const itsBurger = target == burger || burger.contains(target);

    if (!itsMenu && !itsBurger && menu.classList.contains('header__nav--active')) {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      document.body.classList.remove('stop-scroll');
    }
  });

  menuItems.forEach(el => {
    el.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      document.body.classList.remove('stop-scroll');
    });
  });
}

burger();

// submenu
const menu = () => {
  const menuBtns = document.querySelectorAll('.nav__menu-btn');
  let navMenuItem,
    menu,
    menuBtnArrow,
    menuLink;

  menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener('click', (e) => {

      navMenuItem = e.target.closest('.nav__menu-item');
      menu = navMenuItem.querySelector('.nav__submenu-list');
      menuBtnArrow = navMenuItem.querySelector('.nav__menu-btn-arrow');
      menuLink = navMenuItem.querySelectorAll('.nav__submenu-link');

      document.querySelectorAll('.nav__submenu-list').forEach((el) => {
        if (el !== menu && el.classList.contains('nav__submenu-list--dropdown')) {
          el.classList.remove('nav__submenu-list--dropdown');
        }
      });

      document.querySelectorAll('.nav__menu-btn-arrow').forEach((el) => {
        if (el !== menuBtnArrow && el.classList.contains('nav__menu-btn-arrow--active')) {
          el.classList.remove('nav__menu-btn-arrow--active');
        }
      });

      menu.classList.toggle('nav__submenu-list--dropdown');
      menuBtnArrow.classList.toggle('nav__menu-btn-arrow--active');

      menuLink.forEach((e) => {
        e.addEventListener('click', () => {
          menu.classList.remove('nav__submenu-list--dropdown');
          menuBtnArrow.classList.remove('nav__menu-btn-arrow--active');
        });
      });

      document.addEventListener('click', (el) => {
        const target = el.target;
        const itsMenu = target == navMenuItem || navMenuItem.contains(target);

        if (!itsMenu && menu.classList.contains('nav__submenu-list--dropdown')) {
          menu.classList.remove('nav__submenu-list--dropdown');
          menuBtnArrow.classList.remove('nav__menu-btn-arrow--active');
        }
      });
    });
  });
}

menu();

// button "EXPLORE MORE"
const showMore = () => {
  const productsBtn = document.querySelector('.products__btn');
  const productsCardBlock = document.querySelector('.products__card-block');
  const productsLength = document.querySelectorAll('.products__card').length;
  const cards = Array.from(document.querySelectorAll('.products__card'));
  const visCards = [];

  cards.forEach(card => {
    if (getComputedStyle(card).display !== 'none') {
      visCards.push(card);
    }
  });

  const addCard = () => {
    if (visCards.length < cards.length) {
      visCards.push(cards[visCards.length - 1]);
      cards[visCards.length - 1].classList.add('products__card--visible');
    }
  }

  const disableProductsBtn = () => {
    if (items >= productsLength) {
      productsBtn.style.display = 'none';
      productsCardBlock.style.marginBottom = 0;
    }
  }

  if (document.documentElement.clientWidth > 1150 && visCards.length % 3) {
    let remainder = visCards.length % 3;
    for (let i = 0; i < 3 - remainder; i++) {
      addCard();
    }
  } else if (document.documentElement.clientWidth <= 1150 && visCards.length % 2) {
    addCard();
  }

  let items = visCards.length;
  let step;
  disableProductsBtn();

  productsBtn.addEventListener('click', () => {
    if (document.documentElement.clientWidth > 1150) {
      step = 3;
    } else {
      step = 2;
    }

    const showCards = cards.slice(items, items + step);
    showCards.forEach(card => card.classList.add('products__card--visible'))
    items = items + step;

    disableProductsBtn();
  });
}

showMore();

window.addEventListener('resize', () => {
  showMore();
});

// slider
new Swiper('.hero-swiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: 'fade',
});

new Swiper('.reviews-swiper', {
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
