window.requestAnimFrame = (function() {
  return window.requestAnimationFrame       ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame    ||
         function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

$(function() {
  "use strict";

  var $video = $("#video");

  $video.on("play", function() {
    var i = 0, factor;

    (function run() {
      if (i % 2 === 0) { factor = -1; } else { factor = 1 }; i++;

      $video.css({ "-webkit-transform": "scaleX(" + factor + ")", "transform": "scaleX(" + factor + ")" });

      requestAnimFrame(run);
    }());
  });
});
