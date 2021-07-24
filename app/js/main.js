$(function(){

});

document.querySelector('.header__top-search-btn').onclick = function() {
  document.querySelector('.header__top-search').classList.toggle('active');
}

$('.header__slider').slick({
  arrows: false,
  dots: true
});

$('.content__slider').slick({
  dots: false,
  nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  infinite: false
});