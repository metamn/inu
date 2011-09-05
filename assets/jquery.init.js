jQuery(document).ready(function(){

  jQuery('#sidebar').hover(
    function () {
      jQuery("#categories").addClass("opacity-1");
      jQuery("#contact").addClass("opacity-1");
    }, 
    function () {
      jQuery("#categories").removeClass("opacity-1");
      jQuery("#contact").removeClass("opacity-1");
    }
  );

});
