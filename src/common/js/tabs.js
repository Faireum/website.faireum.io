window.tabs = function (tab, box, activeSifix) {
  let
    tabs = $(tab),
    boxes = $(box);

  const toggleTabs = function (e) {
    e.preventDefault();
    
    let
      el = $(this),
      id = el.data('link');

    tabs.removeClass(tab.substr(1) + activeSifix);
    boxes.fadeOut().removeClass(box.substr(1) + activeSifix);
    el.addClass(tab.substr(1) + activeSifix);
    $('#' + id).addClass(box.substr(1) + activeSifix).fadeIn();
  };

  tabs.on('click', toggleTabs);
};
