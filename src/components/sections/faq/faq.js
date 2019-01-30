//  Unwrap
function unwrapAccordion() {
  $(".accordion__item").unwrap();
}

//  Show More
function showMore(containerSelector, listItemSelector, numShow) {
  const $container = $(containerSelector);
  const list = $container.find(listItemSelector);
  const numToShow = numShow;
  const button = $container.find(".btn_more");
  const numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();

  button.click(e => {
    e.preventDefault();
    const showing = list.filter(":visible").length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    const nowShowing = list.filter(":visible").length;
    if (nowShowing >= numInList) {
      button.hide();
    }
  });
}

$(document).ready(() => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    unwrapAccordion();
    showMore(".accordion", ".accordion__item", 3);
  }
});
