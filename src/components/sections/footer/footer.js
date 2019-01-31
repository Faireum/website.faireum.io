$('.footer__nav a[href^="#"]').on('click', function (event) {
    let target = $(this.getAttribute('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top + 2
        }, 600);
    }
});