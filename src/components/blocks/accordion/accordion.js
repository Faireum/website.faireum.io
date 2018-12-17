//  Accordion
const accordion = (() => {
  const $accordion = $(".js-accordion");
  const $accordion_header = $accordion.find(".js-accordion-header");
  const $accordion_item_active = $(".js-accordion-item.active");

  // default settings
  const settings = {
    // animation speed
    speed: 400,

    // close all other accordion items if true
    oneOpen: false
  };

  return {
    // pass configurable object literal
    init($settings) {
      $accordion_header.on("click", function() {
        accordion.toggle($(this));
      });

      $.extend(settings, $settings);

      // ensure only one accordion is active if oneOpen is true
      if (settings.oneOpen && $accordion_item_active.length > 1) {
        $(".js-accordion-item.active:not(:first)").removeClass("active");
      }

      // reveal the active accordion bodies
      $accordion_item_active.find(".js-accordion-body").show();
    },
    toggle($this) {
      if (
        settings.oneOpen &&
        $this[0] !==
          $this
            .closest(".js-accordion")
            .find(".js-accordion-item.active > .js-accordion-header")[0]
      ) {
        $this
          .closest(".js-accordion")
          .find(".js-accordion-item")
          .removeClass("active")
          .find(".js-accordion-body")
          .slideUp();
      }

      // show/hide the clicked accordion item
      $this.closest(".js-accordion-item").toggleClass("active");
      $this
        .next()
        .stop()
        .slideToggle(settings.speed);
    }
  };
})();

accordion.init({ speed: 300, oneOpen: true });
