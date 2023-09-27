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
