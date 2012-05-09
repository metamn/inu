jQuery(document).ready(function(){


  
  // Categories navigation
  jQuery("#categories li").hide();
  
  var str = jQuery("#categories li h2").first().html() + jQuery("#icons").html();
  jQuery("#categories li h2").first().html(str);
  jQuery("#categories li.active").show();
  
  jQuery("#menu").click(function() {
    jQuery("#categories li").show('slow');
    jQuery("#category-image").show('slow');
  });
  
  
  // Thumbs 
  jQuery("#thumbs").click(function() {
    jQuery("#images").addClass('thumb');
  });
  
  
  // Category hover 
  jQuery("#categories #morocco").hover(
    function () {
      jQuery("#category-image img").show('slow');
    }, 
    function () {
      jQuery("#category-image img").hide('slow');
    }
  );

  
  
  
  // Click on photo
  jQuery("#images #image").click(function() {
    if (jQuery(this).hasClass('active')) {
      // click on the active image
      scroll(jQuery(this), jQuery(this).next());            
    }
  });
  // Show only the first photo
  jQuery("#images #image:first").addClass('active');
  
  function animation(element) {
    element
      .animate(
        {"opacity" : "0"}, 'fast'
      )                
      .animate(
        {"width" : "0px"}, 500
      )
      .animate(
        {"margin-right" : "0"}, 600
      )
      .animate(
        {top: "hide"}, 100
    );
  }
  // Do the scroll  
  function scroll(first, next) {
    animation(first);      
    next.addClass('active');      
  }

  
  
});
