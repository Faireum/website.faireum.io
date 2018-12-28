if (!!document.querySelector('.header')) {
  const root = document.querySelector('.header');

  $(window).on('load scroll', function () {
    if ($(window).scrollTop() > 50) {
      root.classList.add('header_sticky');
    } else {
      root.classList.remove('header_sticky');
    }
  });
}

$('.header__nav a, .header__mobm-nav a').on('click', function (event) {
    console.log(this.getAttribute('name'))
    let target = $(this.getAttribute('name'));
    console.log(target.offset().top)

    if (target.length) {
        // event.preventDefault();
        $('html,body').stop()
        $('body').animate({
            scrollTop: target.offset().top + 2
        }, 500);
    }

    $('.header__mobm').fadeOut();
});

$(document).ready(
  mobileMenu('.header__burger', '.header__mobm', '.header__mobm-close')
);
