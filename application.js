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
      var i = 0;

      (function animloop() {
        requestAnimFrame(animloop);

        var val = -1;
        if (i % 2 === 0) { val = Math.abs(val) };

        $video.css({"-webkit-transform": "scaleX(" + val + ")", "transform": "scaleX(" + val + ")"});

        i++;
      }());
    });
  });
}());
