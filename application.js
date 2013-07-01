window.requestAnimFrame = (function() {
  return window.requestAnimationFrame       ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame    ||
         function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

(function(){
  "use strict";

  $(function(){
    var $video = $("#video");

    $video.on("play", function() {
      var i = 0, val;

      (function run() {
        if (i % 2 === 0) { val = -1; } else { val = 1 };

        $video.css({ "-webkit-transform": "scaleX(" + val + ")", "transform": "scaleX(" + val + ")" });

        i++;

        requestAnimFrame(run);
      }());
    });
  });
}());
