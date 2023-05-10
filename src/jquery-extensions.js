
(function ($) {
  $.fn.onPositionChanged = function (options) {
    // Default values for options
    // The options object can contain two properties: trigger and interval.
    // If these properties are not provided, default values will be used (null for trigger and 100 for interval).
    let settings = $.extend(
      {
        trigger: null,
        interval: 100,
        referencePosition: 0
      },
      options
    );

    let o = $(this[0]); // jquery object
    console.log(options)
    if (o.length < 1) return o;
    setInterval(function () {
      if (o == null || o.length < 1) return o; // abort if element is non-existent
      let newPos = o.position();
      if (newPos.top == settings.referencePosition.top) {  // in reference position
        // console.log("in reference position");
        // $(this).trigger('onPositionChanged', { newPos: newPos });
        if (typeof (settings.trigger) == "function") settings.trigger(true);
        newPos = o.position();
      } else {
        // console.log("not in reference position");
        // $(this).trigger('onPositionChanged', { newPos: newPos });
        if (typeof (settings.trigger) == "function") settings.trigger(false);
        newPos = o.position();
      }
    }, settings.interval);
  };
})(jQuery);

