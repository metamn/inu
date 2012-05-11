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
  
  // Category hover 
  jQuery("#categories #morocco").hover(
    function () {
      jQuery("#category-image img").show('slow');
    }, 
    function () {
      jQuery("#category-image img").hide('slow');
    }
  );

  
  
  
  // Thumbs 
  jQuery("#thumbs").click(function() {
    jQuery("#images").addClass('thumb');
  });
  
  
  // Click on photo
  jQuery("#images #image").click(function() {
    if (jQuery(this).parent().hasClass('thumb')) {
      // Click on thumbnail
      jQuery("#images").removeClass('thumb');
      jQuery("#images #image").removeClass('active');
      scroll(jQuery(this).prev(), jQuery(this));
    } else {
      jQuery(this).removeClass('active');   
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
