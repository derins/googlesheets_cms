if ( $(window).width() > 900) {
  //Add your javascript for large screens here
moveBackground();



(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 62
    });

    $('#topNav').affix({
        offset: {
            top: 40
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);
}

// Mobil Version topbar not visible; scroll doesn`t need 60px
else{
  (function($) {
      "use strict";

      $('body').scrollspy({
          target: '.navbar-fixed-top',
          offset: 65
      });

      $('#topNav').affix({
          offset: {
              top: 40
          }
      });

      new WOW().init();

      $('a.page-scroll').bind('click', function(event) {
          var $ele = $(this);
          $('html, body').stop().animate({
              scrollTop: ($($ele.attr('href')).offset().top)
          }, 1450, 'easeInOutExpo');
          event.preventDefault();
      });

      $('.navbar-collapse ul li a').click(function() {
          /* always close responsive nav after click */
          $('.navbar-toggle:visible').click();
      });

      $('#galleryModal').on('show.bs.modal', function (e) {
         $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
      });

  })(jQuery);
}


var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {


  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.move').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}


$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (40 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (30 * lMouseY) / 100;

});









$(document).ready(function(){
			$(".menu-toggle a").click(function(){
				$(".menu").slideToggle(700);
			});
		});
