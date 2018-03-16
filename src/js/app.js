// example of simple includes for js
//=include lib/sayHello.js
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
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'dlider-elite__dots',
    responsive: [
        {
          breakpoint: 700,
          settings: 'unslick'
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
        slidesToShow: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '10px'

      }
    }
  ]
});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 121) {
        $('.top-line').addClass('top-line_scrl');
    } else {
        $('.top-line').removeClass('top-line_scll');
    }
});


/*
$('.hov').hover(function () {
    console.log('sdsdsdsd');
    $(".hov").removeClass('hov-active');
    $(this).addClass('hov-active');
})
$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 285
});*/

$('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.main-menu').toggleClass('main-menu_active')
});