/*!
 * jquery.hsCounter.js 1.4
 *
 * Copyright 2014, Siarhei Hamanovich http://2i.by @hamanovich
 * Released under the GPL v2 License
 *
 * Date: Dec 5, 2014
 */

(function ($) {
    "use strict";
    $.fn.hsCounter = function (options) {
        // Defaults
        var settings = $.extend({
            delay: 50, // timeout between iterations
            signPos: 'after', // sign position 'before' or 'after'
            classVisible: 'countup-vis', // name of class when counter is visible on screen
            decimalSeparator: '.', // decimal separator
            orderSeparator: ' ' // order number separator
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
                regExp = /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                i = self.data('start') ? +self.data('start') : 0,
                amount = $('.countup-amount'),
                timer,
                num,
                line,
                content;

            if (winTop <= self.offset().top && (winTop + winHeight) >= self.offset().top && !self.hasClass(settings.classVisible)) {
                timer = setTimeout(function run() {

                    if (i < numb) {
                        i += increment;
                    } else {
                        i = numb;
                    }

                    num = i.toFixed(fractional)
                        .replace('.', settings.decimalSeparator)
                        .replace(regExp, '$1' + settings.orderSeparator);

                    content = self.find(amount).html(num);

                    if (settings.signPos == 'after') {
                        self.html('<span class="countup-amount">' + num + '</span>' + '&nbsp;' + '<span class="countup-sign">' + sign + '</span>');

                    } else if (settings.signPos == 'before') {
                        self.html('<span class="countup-sign">' + sign + '</span>' + '&nbsp;' + '<span class="countup-amount">' + num + '</span>');
                    }

                    if (self.hasClass('progress-up')) {
                        self.html(self.html() + '<ins/>');
                        self.find('ins').css('width', i + '%');
                    }

                    if (self.parent().hasClass('countup-wrap')) {
                        line = self.parent().find('.countup-line');
                        line.css('width', i + '%');
                    }

                    timer = setTimeout(run, settings.delay);

                }, settings.delay);

                self.addClass(settings.classVisible);
            }
        });
    };
})(jQuery);