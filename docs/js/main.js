"use strict";var burger=function(){var e=document.querySelector(".burger"),t=document.querySelector(".header__nav"),c=document.querySelectorAll(".item-js");e.addEventListener("click",(function(){e.classList.toggle("burger--active"),t.classList.toggle("header__nav--active"),t.classList.contains("header__nav--active")?(e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","Закрыть меню"),document.body.classList.add("stop-scroll")):(e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Открыть меню"),document.body.classList.remove("stop-scroll"))})),document.addEventListener("click",(function(c){var n=c.target,s=n==t||t.contains(n),r=n==e||e.contains(n);s||r||!t.classList.contains("header__nav--active")||(e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Открыть меню"),e.classList.remove("burger--active"),t.classList.remove("header__nav--active"),document.body.classList.remove("stop-scroll"))})),c.forEach((function(c){c.addEventListener("click",(function(){e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Открыть меню"),e.classList.remove("burger--active"),t.classList.remove("header__nav--active"),document.body.classList.remove("stop-scroll")}))}))};burger();var select=function(){var e=document.querySelector(".select"),t=document.querySelector(".select__dropdown"),c=document.querySelectorAll(".select__input"),n=document.querySelectorAll(".select__item");c.forEach((function(e){e.addEventListener("click",(function(){e.parentNode.classList.toggle("select--open"),e.parentNode.querySelector(".select__dropdown").classList.toggle("select--open")}))})),n.forEach((function(e){e.addEventListener("click",(function(){var t=e.innerText,c=e.closest(".select");c.querySelector(".select__current").innerText=t,c.classList.remove("select--open"),c.querySelector(".select__dropdown").classList.remove("select--open")}))})),document.addEventListener("click",(function(c){var n=c.target;!(n==e||e.contains(n))&&e.classList.contains("select--open")&&(e.classList.remove("select--open"),t.classList.remove("select--open"))}))};select();var showMore=function(){var e=document.querySelector(".products__btn"),t=document.querySelector(".products__card-block"),c=document.querySelectorAll(".products__card").length,n=Array.from(document.querySelectorAll(".products__card")),s=[];n.forEach((function(e){"none"!==getComputedStyle(e).display&&s.push(e)}));var r=function(){s.length<n.length&&(s.push(n[s.length-1]),n[s.length-1].classList.add("products__card--visible"))},o=function(){d>=c&&(e.style.display="none",t.style.marginBottom=0)};if(document.documentElement.clientWidth>1150&&s.length%3)for(var a=s.length%3,i=0;i<3-a;i++)r();else document.documentElement.clientWidth<=1150&&s.length%2&&r();var l,d=s.length;o(),e.addEventListener("click",(function(){l=document.documentElement.clientWidth>1150?3:2,n.slice(d,d+l).forEach((function(e){return e.classList.add("products__card--visible")})),d+=l,o()}))};showMore(),window.addEventListener("resize",(function(){showMore()})),new Swiper(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},keyboard:!0,breakpoints:{320:{slidesPerView:1},735:{slidesPerView:2,spaceBetween:20},1151:{slidesPerView:3,spaceBetween:20}}});