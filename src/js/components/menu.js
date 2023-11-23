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
