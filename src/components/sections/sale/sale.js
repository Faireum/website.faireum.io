//  Select
function selectToTab() {
  const select = $(".sale__tabs-select"),
    li = select.find("ul li");

  let choice = function() {
    let id = $(this).index();
    $(".sale__tabs-item:eq(" + id + ")").trigger("click");
  };

  li.on("click", choice);
}

$(document).ready(function() {
  tabs(".sale__tabs-item", ".sale__tabs-box", "_open");
  if (window.matchMedia("(max-width: 768px)").matches) {
    selectToTab();
  }
});
