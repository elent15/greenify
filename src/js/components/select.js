const select = () => {
  const select = document.querySelector('.select');
  const selectDropdown = document.querySelector('.select__dropdown');
  const selectInput = document.querySelectorAll('.select__input');
  const selectItem = document.querySelectorAll('.select__item');

  selectInput.forEach(input => {
    input.addEventListener('click', () => {
      input.parentNode.classList.toggle('select--open');
      input.parentNode.querySelector('.select__dropdown').classList.toggle('select--open');
    });
  });

  selectItem.forEach(item => {
    item.addEventListener('click', () => {
      let text = item.innerText,
        select = item.closest('.select'),
        currentText = select.querySelector('.select__current');

      currentText.innerText = text;
      select.classList.remove('select--open');
      select.querySelector('.select__dropdown').classList.remove('select--open');
    });
  });

  document.addEventListener('click', (el) => {
    const target = el.target;
    const itsSelect = target == select || select.contains(target);

    if (!itsSelect && select.classList.contains('select--open')) {
      select.classList.remove('select--open');
      selectDropdown.classList.remove('select--open');
    }
  });
}

select();
