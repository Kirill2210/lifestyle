$(function(){

});

document.querySelector('.header__top-search-btn').onclick = function() {
  document.querySelector('.header__top-search').classList.toggle('active');
}

$('.header__slider').slick({
  arrows: false,
  dots: true
});