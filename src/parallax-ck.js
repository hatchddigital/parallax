/*
 * parallax
 * https://github.com/hatchddigital/parallax
 *
 * Copyright (c) 2013 Niaal Holder, Jimmy Hillis
 * Licensed under the MIT license.
 */(function(e){e.fn.parallax=function(t){var n=e(this),r=0,i=!1;t=e.extend({speed:3,direction:-1},t);e(window).scroll(function(){i=!0});setInterval(function(){if(i){i=!1;n.each(function(){var n=e(this),r=e(document).scrollTop(),i=(r-e(this).data("offset"))/(t.direction*t.speed);n.css("background-position","50% "+i+"px")})}},20);return this.each(function(){var n=e(this),r=n.offset().top-500,i=e(document).scrollTop(),s=(i-r)/(t.direction*t.speed);n.data("offset",r);n.css("background-position","50% "+s+"px")})}})(jQuery);
