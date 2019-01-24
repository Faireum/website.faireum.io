//  Slider
function problemSlider() {
  const $problem = $(".problem__slider"),
    $navPrev = $(".problem__nav-prev"),
    $navNext = $(".problem__nav-next"),
    $dots = $(".problem__dot"),
    $numAll = $(".problem__numof-all"),
    $numCur = $(".problem__numof-cur");

  $problem.on("init reInit afterChange", function(event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $numCur.text("0" + i);
    $numAll.text("0" + slick.slideCount);
  });

  $problem.slick({
    slidesToShow: 4,
    prevArrow: $navPrev,
    nextArrow: $navNext,
    appendDots: $dots,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    customPaging: function(slider, i) {
      var slideNumber = i + 1,
        totalSlides = slider.slideCount;
      return (
        '<a class="problem__dot" role="button" title="' +
        slideNumber +
        " of " +
        totalSlides +
        '">+</a>'
      );
    },
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
}

$(document).ready(() => {
  problemSlider();
});
