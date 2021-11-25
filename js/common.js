function logoAnimate() {
  jQuery('.logo').animate(
  {
    opacity: 0.97
  },
  100,
  function(){
    jQuery('.logo').animate(
    {
      opacity: 1.0
    },
    100,
    function(){
      logoAnimate();
    });
  });
}
jQuery(window).bind("load", function() {

  var footerHeight = 0,
  headerHeight = 0,
  infoHeight = 0,
  footerTop = 0,
  $footer = jQuery("#footer"),
  $header = jQuery("#header"),
  $info = jQuery(".info");

  position();
  function position() {
    footerHeight = $footer.height();
    headerHeight = $header.height();
    infoHeight = $info.height();

    var totalHeight = footerHeight + headerHeight + infoHeight + 20;
    if (totalHeight < jQuery(window).height()){
      $header.stop().animate({
        'margin-bottom': ((jQuery(window).height() - totalHeight)/2).toFixed()+"px"
      });
    } else {
      $header.stop().animate({
        'margin-bottom': "0px"
      });
    }

    footerTop = (jQuery(window).scrollTop()+jQuery(window).height()-footerHeight) - 20;
    if ( (jQuery(document.body).height()+footerHeight) < jQuery(window).height()) {
      $footer.stop().css({
        position: "absolute",
        top: "600px"
      });
      $footer.animate({
        top: footerTop+"px"
      })
    } else {
      $footer.css({
        position: "static"
      })
    }
  }
  jQuery(window).resize(position);
});
jQuery(document).ready(function(){
  logoAnimate();
  var $logos = jQuery('.logos');
  var $logos_i = jQuery('.logos_i');
  $logos.hover(function(){
    $logos_i.animate({
      opacity: 1.0
    }, 300);
  }, function(){
    $logos_i.animate({
      opacity: 0.2
    }, 300);
  });

  if (jQuery.browser.msie) { // IE goodies

    jQuery('input:text').each(function(){
      var $input = jQuery(this);
      if ($input.attr('placeholder').length) {
        var ph = $input.attr('placeholder');
        if ($input.val() == '') {
          $input.val(ph);
        }
        $input.focus(function(){
          if ($input.val() == ph) {
            $input.val('');
          }
        });
        $input.blur(function(){
          if ($input.val() == '') {
            $input.val(ph);
          }
        });
      }
    });

    var $send = jQuery('.gradient.btn');
    if ($send.length) {
      $send.hover(function(){
        $send.addClass('active');
      }, function(){
        $send.removeClass('active');
      });
    }

  }

});