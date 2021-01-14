$('[data-fancybox="gallery"]').fancybox({
  afterLoad: function (instance, current) {
    var pixelRatio = window.devicePixelRatio || 1;

    if (pixelRatio > 1.5) {
      current.width = current.width / pixelRatio;
      current.height = current.height / pixelRatio;
    }
  },
  loop: true,
  gutter: 50,
  keyboard: true,
  arrows: true,
  infobar: true,
  smallBtn: "auto",
  toolbar: "auto",
  buttons: [
    "zoom",
    "share",
    "slideShow",
    "fullScreen",
    "download",
    "thumbs",
    "close",
  ],
  idleTime: 2,
  protect: false,
  slideShow: {
    autoStart: false,
    speed: 2000,
  },
});
