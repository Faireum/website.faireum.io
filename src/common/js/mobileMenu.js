window.mobileMenu = function(openBtn, menuSelector, closeBtn ) {
  const
    burger = $(openBtn),
    menu = $(menuSelector),
    close = $(closeBtn);

  const show = function () {
    menu.fadeIn();
  };
  const hide = function () {
    menu.fadeOut();
  };

  burger.on('click', show);
  close.on('click', hide);
};