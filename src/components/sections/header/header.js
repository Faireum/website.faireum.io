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


