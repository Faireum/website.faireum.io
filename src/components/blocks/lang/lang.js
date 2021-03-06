function lang() {

  var container = $('.lang'),
    selecBox = container.find('.lang__head'),
    item = container.find('li'),
    locale = container.find('li a');

  selecBox.bind('click', function () {
    $(this).parent().find('ul').fadeToggle('fast');
    $(this).toggleClass('lang__head_active');
  });

  $(document).bind('click', function (event) {
    if (container.has(event.target).length === 0) {
      selecBox.removeClass('lang__head_active');
      selecBox.parent().find('ul').stop().fadeOut('fast');
    }
  });

  for(var i=0;i<item.length;i++) {
    if(window.location.pathname.indexOf($(locale[i]).attr('id')) != -1) {
        $(item[i]).parent().addClass('lang__item_checked');
        $('.lang__text').text($(locale[i]).text())
        $.cookie('locale', $(locale[i]).text())
        console.log($.cookie('locale'))
        break;
    }
  }

}

$(document).ready(lang);