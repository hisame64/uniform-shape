/*
 * uniform-shape
 * https://github.com/hisame64/uniform-shape
 *
 * Copyright (c) 2014 Shuji Isogai
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.uniform_shape = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.uniform_shape = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.uniform_shape.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.uniform_shape.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].uniform_shape = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
