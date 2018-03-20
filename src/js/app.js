// example of simple includes for js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

$('.js-hero').slick({
  dots: true,
  nextArrow: '.slider__next',
  prevArrow: '.slider__prev',
  dotsClass: 'dots',
  slidesToShow: 1,
  adaptiveHeight: true,
  responsive: [{
    dotsClass: 'dots',
    dots: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    }
  ]
});
$('.slider-elite').slick({
    nextArrow: '.slider__next-elite',
    prevArrow: '.slider__prev-elite',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    dotsClass: 'slider-elite__dots',
    responsive: [
        {
          breakpoint: 700,
          settings: 'unslick',
          arrows: false,
        },
      ]
});

$('.js-hero-exclusive').slick({
  nextArrow: '.slider__next-exclusive',
  prevArrow: '.slider__prev-exclusive',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '100px'

      }
    }
  ]
});

 


$('.hov').hover(function () {
    console.log('sdsdsdsd');
    $(".hov").removeClass('hov-active');
    $(this).addClass('hov-active');
})
/*
$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 285
});*/

$('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.main-menu').toggleClass('main-menu_active')
});

$('.js-btn-popup').click(function () {
  $('.popup').toggleClass('popup_active');
});


$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
    });
});