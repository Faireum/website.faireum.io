//  Slider
function roadmapSlider() {
  const $roadmap = $(".roadmap__slider"),
    $navNext = $(".roadmap__nav-next"),
    $navPrev = $(".roadmap__nav-prev"),
    $dots = $(".roadmap__dots"),
    $numAll = $(".roadmap__numof-all"),
    $numCur = $(".roadmap__numof-cur");

  let slidesPerPage = 1;
  //
  // if (window.matchMedia("(max-width: 768px)").matches) {
  //   slidesPerPage = 1;
  // } else if (window.matchMedia("(max-width: 991px)").matches) {
  //   slidesPerPage = 3;
  // } else if (window.matchMedia("(max-width: 1365px)").matches) {
  //   slidesPerPage = 4;
  // } else {
  //   slidesPerPage = 5;
  // }

  $roadmap.on("init reInit afterChange", (event, slick, currentSlide) => {
    const i = Math.ceil(
      ((currentSlide ? currentSlide : 0) + 1) / slidesPerPage
    );
    const totalSlides = Math.ceil(slick.slideCount / slidesPerPage);

    $numCur.text(i <= 9 ? `0${i}` : i);
    $numAll.text(totalSlides <= 9 ? `0${totalSlides}` : totalSlides);
  });

  $roadmap.slick({
    slidesToShow: slidesPerPage,
    slidesToScroll: slidesPerPage,
    prevArrow: $navPrev,
    nextArrow: $navNext,
    appendDots: $dots,
    dots: true,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging(slider, i) {
      const slideNumber = i + 1;
      const totalSlides = Math.ceil(slider.slideCount / slidesPerPage);
      return `<a class="roadmap__dot" role="button" title="${slideNumber} of ${totalSlides}">+</a>`;
    },

    responsive: [
      {
        breakpoint: 3600,
        settings: {
          variableWidth: true,
          slidesToShow: slidesPerPage,
          slidesToScroll: slidesPerPage
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: slidesPerPage,
          slidesToScroll: slidesPerPage
        }
      }
    ]
  });
}

//  Info
function roadmapInfo() {
  const $circle = $(".roadmap__circle"),
    $text = $(".roadmap__text");

  $circle.on("mouseenter", function() {
    $(this)
      .next()
      .stop()
      .fadeIn();
  });

  $text.on("mouseleave", function() {
    $(this).fadeOut();
  });
}

//  Shadow
function shadow() {
  const $shadow = $(".slider__shadow");
  $(".roadmap__slider").mousemove(function(e) {
    const parentOffset = $(this)
      .parent()
      .offset();
    const relY = e.pageY - parentOffset.top;
    const relX = e.pageX - parentOffset.left;

    $shadow.css({ top: `${-(relY / 10 - 50)}%` });
    $shadow.css({ right: relX / 8 });
  });
}

$(document).ready(() => {
  if (window.matchMedia("(min-width: 769px)").matches) {
    roadmapInfo();
  }
  roadmapSlider();
  shadow();
});
