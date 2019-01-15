//  Slider
function aboutSlider() {
  const $about = $(".about__slider"),
    $navPrev = $(".about__nav-prev"),
    $navNext = $(".about__nav-next"),
    $dots = $(".about__dot"),
    $numAll = $(".about__numof-all"),
    $numCur = $(".about__numof-cur");

  if ($(window).width() > 991) {
    if ($about.hasClass("slick-initialized")) {
      $about.slick("unslick");
    }
    return;
  }
  if (!$about.hasClass("slick-initialized")) {
    $about.on("init reInit afterChange", (event, slick, currentSlide) => {
      const i = (currentSlide ? currentSlide : 0) + 1;
      $numCur.text(i <= 9 ? `0${i}` : i);
      $numAll.text(
        slick.slideCount <= 9 ? `0${slick.slideCount}` : slick.slideCount
      );
    });
    return $about.slick({
      slidesToShow: 4,
      prevArrow: $navPrev,
      nextArrow: $navNext,
      appendDots: $dots,
      dots: true,
      customPaging(slider, i) {
        const slideNumber = i + 1;
        const totalSlides = slider.slideCount;
        return `<a class="about__dot" role="button" title="${slideNumber} of ${totalSlides}">+</a>`;
      },
      responsive: [
        {
          breakpoint: 992,
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
            slidesToScroll: 1
          }
        }
      ]
    });
  }
}

$(window).on("load resize", () => {
  aboutSlider();
});
