$(window).on('scroll', function() {
  let 
    scroll = $('.scroll'),
    span = scroll.find('span'),
    sTextUp = span.data('up'),
    sTextDown = span.data('down'),
    firstScreen = $('.promo').height();

  if($(window).scrollTop() + firstScreen > firstScreen) {
    span.text(sTextUp);
    scroll.addClass('scroll_up');

    scroll.click(function(){
      $([document.documentElement, document.body]).stop().animate({scrollTop:0}, 500, 'swing');
    });
  } else {
    span.text(sTextDown);
    scroll.removeClass('scroll_up');
  }
});
