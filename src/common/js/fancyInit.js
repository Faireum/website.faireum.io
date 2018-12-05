//  Init Fancybox
(function fancyInit() {
  $("[data-fancybox]").fancybox({
    touch: false,
    btnTpl: {
      close: `<button data-fancybox-close class="btn_close" type="button" title="Close"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.9375" y="2.56641" width="16" height="1" transform="rotate(45 2.9375 2.56641)"/>
      <rect x="2.23047" y="13.8799" width="16" height="1" transform="rotate(-45 2.23047 13.8799)" />
      </svg>
      </button>`,
      smallBtn: `<button data-fancybox-close class="btn_close" type="button" title="Close"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.9375" y="2.56641" width="16" height="1" transform="rotate(45 2.9375 2.56641)" />
      <rect x="2.23047" y="13.8799" width="16" height="1" transform="rotate(-45 2.23047 13.8799)" />
      </svg>
      </button>`
    }
  });
})();
