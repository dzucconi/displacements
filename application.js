window.requestAnimFrame = (function() {
  return window.requestAnimationFrame       ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame    ||
         function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

$(function() {
  "use strict";

  var $video = $("#video"),

      vendored = function(factor) {
        return ["-webkit-", "-moz-", "-ms-", "-o-", ""].reduce(function(obj, prefix) {
          obj[prefix + "transform"] = "scaleX(" + factor + ")";

          return obj;
        }, {});
      }

  $video.on("play", function() {
    var i = 0, factor;

    (function run() {
      if (i % 2 === 0) { factor = -1; } else { factor = 1 }; i++;

      $video.css(vendored(factor));

      requestAnimFrame(run);
    }());
  });
});
