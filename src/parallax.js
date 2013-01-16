/*
 * parallax
 * https://github.com/hatchddigital/parallax
 *
 * Copyright (c) 2013 Jimmy Hillis
 * Licensed under the MIT license.
 */

(function($) {

    // Collection method.
    $.fn.parallax = function(options) {

        var count = 0;
        options = $.extend({
            'speed': 3,
            'direction': -1
        }, options);

        return this.each(function() {

            var $this = $(this)
              , container_offset = $this.offset().top - 500;

            $(window).scroll(function () {
                var current_vertical_offset = $(document).scrollTop()
                  , new_vertical_position = (current_vertical_offset - container_offset) / (options.direction * options.speed);
                $this.css("background-position", "50% " + new_vertical_position + "px");
            });

        });

    };

}(jQuery));
