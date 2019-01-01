$(document).ready(function () {
  var $promo = $('.promo__slider');

  $promo.on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.promo__numof-cur').text('0' + i);
    $('.promo__numof-all').text('0' + slick.slideCount);
  });
  
  $promo.slick({
    slidesToShow: 1,
    prevArrow: $('.promo__nav-prev'),
    nextArrow: $('.promo__nav-next'),
    appendDots: $('.promo__dots'),
    dots: true,
    infinite: false,
    draggable: false,
    customPaging: function (slider, i) {
      var 
        slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="promo__dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '">+</a>';
    }
  });
});