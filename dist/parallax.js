/*! Parallax - v0.1.0 - 2013-01-16
* https://github.com/hatchddigital/parallax
* Copyright (c) 2013 Niaal Holder, Jimmy Hillis; Licensed MIT */

(function($) {

    // Collection method.
    $.fn.parallax = function(options) {

        var $elements = $(this)
          , count = 0
          , did_scroll = false;

        options = $.extend({
            'speed': 3,
            'direction': -1
        }, options);

        // Limit scroll behaviour to specific per-second value
        $(window).scroll(function () {
            did_scroll = true;
        });

        // Preform background movement
        setInterval(function() {
            if (did_scroll) {
                did_scroll = false;
                $elements.each(function () {
                    var $this = $(this)
                      , current_vertical_offset = $(document).scrollTop()
                      , new_vertical_position = (current_vertical_offset - $(this).data('offset')) / (options.direction * options.speed);
                    $this.css("background-position", "50% " + new_vertical_position + "px");
                });
            }
        }, 30);

        // Determine default values
        return this.each(function() {
            var $this = $(this)
              , container_offset = $this.offset().top - 500
              , current_vertical_offset = $(document).scrollTop()
              , new_vertical_position = (current_vertical_offset - container_offset) / (options.direction * options.speed);
            $this.data('offset', container_offset);
            $this.css("background-position", "50% " + new_vertical_position + "px");
        });


    };

}(jQuery));
