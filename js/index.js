$(window).scroll(() => {
  let scroltop = $(window).scrollTop();
  let aboutOffset = $("#about").offset().top;
  if (scroltop >= aboutOffset - 50) {
    $("#main-nav").css({ backgroundColor: "black", color: "white" });
    $("#btnUp").fadeIn(500);
  } else {
    $("#main-nav").css("backgroundColor", "transparent");
    $("#btnUp").fadeOut(500);
  }
});

$("#btnUp").click(() => {
  $("html,body").animate({ scrollTop: 0 }, 500);
});

$(".nav-item a[href^='#']").click(function () {
  $(".nav-item a").removeClass("myActive");
  $(this).addClass("myActive");
  let href = $(this).attr("href");
  let sectionOffsetTop = $(href).offset().top;

  $("html,body").animate({ scrollTop: sectionOffsetTop }, 1000);
});

let spans = $("#boxcolor span");
spans.qu(0).css("backgroundColor", "blue");
