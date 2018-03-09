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
  adaptiveHeight: true
});

$('.js-hero-exclusive').slick({
  nextArrow: '.slider__next-exclusive',
  prevArrow: '.slider__prev-exclusive',
  slidesToShow: 3
});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 71) {
        $('.top-line').addClass('fixed');
    } else {
        $('.top-line').removeClass('fixed');
    }
});
$('.hov').hover(function () {
    console.log('sdsdsdsd');
    $(".hov").removeClass('hov-active');
    $(this).addClass('hov-active');
})

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 285
});
