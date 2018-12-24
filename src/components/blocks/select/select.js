function select() {
  const container = $(".select"),
    selecBox = container.find(".select__head"),
    item = container.find("li");

  selecBox.bind("click", function() {
    $(this)
      .parent()
      .find("ul")
      .slideToggle("fast");
    $(this).toggleClass("select__head_active");
  });

  item.bind("click", function() {
    var text = $(this).text(),
      parent = $(this).closest(container);

    parent.find("li").removeClass("select__item_checked");
    $(this).addClass("select__item_checked");
    parent
      .find(".select__head")
      .find("span")
      .text(text);
    parent.find("ul").slideToggle("fast");
    parent.find(".select__head").toggleClass("select__head_active");
  });

  $(document).bind("click", function(event) {
    if (container.has(event.target).length === 0) {
      selecBox.removeClass("select__head_active");
      selecBox
        .parent()
        .find("ul")
        .slideUp("fast");
    }
  });
}

$(document).ready(select);
