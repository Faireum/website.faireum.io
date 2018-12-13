function navigation() {
  const
    contentSections = $('section'),
    navigationItems = $('.navigation__item');

  function updateNavigation() {
    var currentScrollPos = $(window).scrollTop();
    var skipNav;

    for(var i=contentSections.length - 1;i>=0;i--) {
      var curItem = $(contentSections[i]);
      var activeSection = $('.navigation a[name="#'+curItem.attr('id')+'"]');

      if(currentScrollPos >= curItem.position().top) {
          activeSection.addClass('navigation__item_active');
          skipNav = curItem.attr('id')
          break;
      }
    }

    var removeSection = $('.navigation a[name!="#' + skipNav + '"]');

    removeSection.removeClass('navigation__item_active');
  }

  function smoothScroll(target) {
    // $(window).off('scroll');
    $('body, html').stop().animate({
      scrollTop: target.offset().top + 2
    }, 200, function() {
      $(window).on('scroll', updateNavigation);
    });
  }

  //smooth scroll to the section
  navigationItems.on('click', function(event){
      event.preventDefault();
      smoothScroll($(this.name));
  });

  setTimeout(updateNavigation(), 500);

  $(window).on('scroll', updateNavigation);
}

$(document).ready(navigation);