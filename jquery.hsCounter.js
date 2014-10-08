/*!
 * jquery.hsCounter.js 1.0
 *
 * Copyright 2014, Siarhei Hamanovich http://hamanovich.ru @hamanovich
 * Released under the GPL v2 License
 *
 * Date: Oct 8, 2014
 */

(function($) {
    "use strict";

    $.fn.hsCounter = function (options) {

        // Defaults
        var settings = $.extend({
            delay: 50,                   // timeout between iterations
            signPos: 'after',            // sign position 'before' or 'after'
            classVisible: 'countup-vis', // name of class when counter is visible on screen
            decimalSeparator: '.',       // decimal separator
            orderSeparator: ' '          // order number separator
        }, options);

        return this.each(function () {

            if (options) {
                $.extend(settings, options);
            }

            var self = $(this),
                win = $(window),
                winTop = win.scrollTop(),
                winHeight = win.height(),
                numb = self.data('num'),
                increment = self.data('increment'),
                fractional = self.data('fractional') ? self.data('fractional') : 0,
                sign = self.data('sign') ? self.data('sign') : '',
                i = 0,
                timer,
                num,
                regExp = /(\d)(?=(\d\d\d)+([^\d]|$))/g;

                if (winTop <= self.offset().top && (winTop + winHeight) >= self.offset().top
                    && !self.hasClass(settings.classVisible)) {

                    timer = setTimeout(function run() {

                        if (i < numb) {
                            i += increment;
                        } else {
                            i = numb;
                        }

                        num = i.toFixed(fractional).replace('.', settings.decimalSeparator).replace(regExp, '$1'+settings.orderSeparator);

                        if (settings.signPos == 'after'){
                            self.html(num + '&nbsp;' + '<span class="countup-sign">' + sign + '</span>');
                        } else if (settings.signPos == 'before') {
                            self.html('<span class="countup-sign">' + sign + '</span>' + '&nbsp;' + num);
                        }

                        timer = setTimeout(run, settings.delay);

                    }, settings.delay);

                    self.addClass(settings.classVisible);
                }

        });
    }
})(jQuery);