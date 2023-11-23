# Лендинг [Greenify](https://elent15.github.io/greenify)

### Сайт магазина экотоваров
 
* Html, css, js
* Методология БЭМ, препроцессор SASS в синтаксисе SCSS
* Валидная, адаптивная (до 320px), кроссбраузерная вёрстка
* SVG-спрайт
* Двухуровневое меню в header и footer
* Слайдеры (плагин swiper):
  * на первом экране - зацикленный слайдер с автовоспроизведением и fade-эффектом,
  * в секции "Customer Reviews"
* Стилизованы состояния hover и focus для ссылок, кнопок и полей для ввода данных
* Анимированы картинки (эффект переворота) в состоянии hover и focus в секции "Our Best-Selling Sustainable Products"
* Реализовано добавление на страницу новых карточек товара при нажатии на кнопку "EXPLORE MORE" в секции "Our Best-Selling Sustainable Products"

#### Gulp-сборка (Gulp 4)

* команда gulp - сборка проекта в режиме разработки (папка dev):
  * html-файлы из папки src/partials объединены в файл index.html;
  * scss-файлы из папки src/scss объединены в файл main.css;
  * css-файлы из папки src/scss/vendor (сторонние css-файлы) объединены в файл vendor.css;
  * js-файлы из папки src/js/components объединены в файл main.js;
  * js-файлы из папки src/js/vendor (сторонние js-файлы) объединены в файл vendor.js;
  * изображения в форматах png и jpg из папки src/images конвертированы в формат webp;
  * изображения в формате svg из папки src/images/svg/sprite минифицированы и объединены в svg-спрайт (sprite.svg);
  * шрифты из папки src/fonts конвертированы в форматы woff и woff2
* команда gulp build - итоговая сборка проекта (папка docs):
  * в файле стилей main.css добавлены вендорные префиксы, сгруппированы медиа-запросы;
  * к файлу main.js применён транспайлер babel;
  * минимизированы файлы index.html, main.css, vendor.css, main.js;
  * сжаты файлы изображений в форматах jpg, png, svg
