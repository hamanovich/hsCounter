hsCounter
=========

jquery.hsCountup.js is a free, lightweight jQuery plugin that can be used to quickly create animations for counting numbers.

When the counter is in the area of ​​the screen starts increase from zero to the specified.

### Usage
-----

Include this script after jQuery. Requires jQuery 1.8+.
``` html
<script src='jquery.js'></script>
<script src='jquery.hsCounter.js'></script>
```
Of course omit the first line if you already have jQuery included.

After that, you need to write this code (or put at the end of your custom jquery code):
``` javascript
(function($){
  $('.countup').hsCounter();
  $(window).scroll(function(){
      $('.countup').hsCounter();
  });
})(jQuery)
```

You can use plugin with default options, e.g.:
``` javascript
(function($){
  $('.countup').hsCounter({
    delay: 100,
    signPos: 'before',
    classVisible: 'i-can-see-you',
    decimalSeparator: '&acute;',
    orderSeparator: ','
  });
})(jQuery)
```

In archive you can find demo page with some examples.
