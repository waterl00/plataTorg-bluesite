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
        arrows: true,
        slidesToShow: 3,
        dots: true,
      }
    },
    {
      breakpoint: 740,
      settings: {
        arrows: true,
        slidesToShow: 2,
         dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '60px'

      }
    }
  ]
});

 
$(function(f) {
  var element = f('#hid');
  f(window).scroll(function() {
    element['fade' + (f(this).scrollTop() > 200 ? 'In' : 'Out')](500);
  });
});

$('.hov').hover(function () {
    console.log('sdsdsdsd');
    $(".hov").removeClass('hov-active');
    $(this).addClass('hov-active');
})

$('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.main-menu').toggleClass('main-menu_active')
});

$('.js-btn-popup').click(function () {
  $('.popup').toggleClass('popup_active');
});

$('.js-btn-popup-video').click(function () {
  $('.popup-video').toggleClass('popup-video_active');
});
$('.js-copyright').click(function () {
  $('.js-span ').toggleClass('js-span_active');
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






  ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map ("map", {
            center: [55.752526, 37.621830],
            zoom: 11
        });

        var myPlacemark = new ymaps.Placemark([55.724317, 37.159750], {}, {
          iconLayout: 'default#image',
          iconImageHref: '../img/icon-map.png',
          iconImageSize: [37, 50],
          iconImageOffset: [-3, -42]
    });
        myMap.geoObjects.add(myPlacemark);
    }