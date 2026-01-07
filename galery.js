$(document).ready(function () {

  console.log("NanoGallery inicializando ✅");

  $("#nanogallery").nanogallery2({

    // ---- ORIGEN: HTML (<a>) ----
    itemsBaseURL: "",

    // ---- LAYOUT ----
    thumbnailHeight: 200,
    thumbnailWidth: 240,
    galleryMaxRows: 0,
    thumbnailAlignment: "center",

    // ---- ESPACIADO ----
    thumbnailL1GutterWidth: 15,
    thumbnailL1GutterHeight: 15,

    // ---- ANIMACIONES ----
    thumbnailDisplayTransition: "flipUp",
    thumbnailDisplayTransitionDuration: 400,
    thumbnailDisplayInterval: 150,
    thumbnailDisplayOrder: "rowByRow",

    thumbnailHoverEffect2: "toolsSlideUp|labelSlideDown",

    // ---- TOOLS ----
    thumbnailToolbarImage: {
      bottomRight: "zoom,fullscreen,download"
    },

    // ---- OTROS ----
    locationHash: false
  });

});
