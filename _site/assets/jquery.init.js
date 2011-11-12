jQuery(document).ready(function(){


  // Categories navigation
  jQuery("#categories li").hide();
  jQuery("#categories li").first().show();
  

  // Image slide and slideshow
  // - single click to slide
    
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
    
  function scroll(first, next) {
    animation(first);      
    next.addClass('active');      
  }

  // Click on image
  jQuery("#images #image").click(function() {
    if (jQuery(this).hasClass('active')) {
      // click on the active image
      scroll(jQuery(this), jQuery(this).next());            
    }
  });

  
  
});
