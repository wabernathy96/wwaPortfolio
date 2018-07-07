$(document).ready(function() {
  $("#hello").click(function() {
    console.log("BUTTON IS WORKING AND NOT NULL");
  });

  // Wrap every letter in a span for animation
  $(".ml10 .letters").each(function() {
    $(this).html(
      $(this)
        .text()
        .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
    );
  });

  // Domino Animation
  anime.timeline({ loop: false }).add({
    targets: ".ml10 .letter",
    rotateY: [-90, 0],
    duration: 1300,
    delay: function(el, i) {
      return 200 * i;
    }
  });

  // Wrap every letter in a span
  $(".ml3").each(function() {
    $(this).html(
      $(this)
        .text()
        .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
    );
  });

  anime.timeline({ loop: false }).add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 500,
    delay: function(el, i) {
      return 250 * (i + 1);
    }
  });

  // Wrap every letter in a span
  $(".ml12").each(function() {
    $(this).html(
      $(this)
        .text()
        .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
    );
  });

  // New Production Animation
  anime.timeline({ loop: false }).add({
    targets: ".ml12 .letter",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 8000,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  });

  // $(".btn").click(function() {
  //   anime.timeline({ loop: false }).add({
  //     targets: ".btn",
  //     opacity: 0,
  //     duration: 1000,
  //     easing: "easeOutExpo",
  //     delay: 1000
  //   });
  //   console.log("CLICKED");
  // });
});
