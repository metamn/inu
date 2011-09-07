jQuery(document).ready(function(){

  // Hover to display the message
  jQuery("#message").hover(
    function () {
      jQuery("#message").addClass('opacity-1');      
    }, 
    function () {
      jQuery("#message").removeClass('opacity-1');      
    }
  );


  // Hover on icons
  jQuery("#icons img").hover(
    function () {
      var title = jQuery(this).attr('title');
      jQuery('#categories a[title="' + title + '"]').addClass('opacity-1');
    }, 
    function () {
      var title = jQuery(this).attr('title');
      jQuery('#categories a[title="' + title + '"]').removeClass('opacity-1');
    }
  );


  // Slide photos
  jQuery("#images #image:first").addClass('active');
  
  // Show the next photo comming
  jQuery("#images #image").hover(
    function () {
      if (!(jQuery(this).hasClass('active'))) {
        jQuery(this).addClass("opacity-1");
      }      
    }, 
    function () {
      if (!(jQuery(this).hasClass('active'))) {
        jQuery(this).removeClass("opacity-1");
      }
    }
  );
  // Show the next photo
  jQuery("#images #image").click(function() {
    if (jQuery(this).hasClass('active')) {
      // hide current image
      jQuery(this)
        .animate(
          {"opacity" : "0"}, 'fast'
        )                
        .animate(
          {"width" : "0px"}, 'slow'
        )
        .animate(
          {"margin-right" : "0"}, 'fast'
        )
        .animate(
          {top: "hide"}, 'slow'
      );
      // show the next image, 
      // or the icons if the last image is done
      if (jQuery(this).next().length != 0) {
        jQuery(this).next().addClass('active');    
        jQuery(this).next().removeClass('opacity-0');
      } else {
        jQuery("#icons").slideToggle(); 
      }      
    } else {
      // hide previous image
      jQuery(this).prev()
        .animate(
          {"opacity" : "0"}, 'fast'
        )                
        .animate(
          {"width" : "0px"}, 'slow'
        )
        .animate(
          {"margin-right" : "0"}, 'fast'
        )
        .animate(
          {top: "hide"}, 'slow'
      );
      // show the  next image
      jQuery(this).addClass('active');    
      jQuery(this).removeClass('opacity-0');
    }
    jQuery("#message").addClass('opacity-0');
  });
  
  
  
  // Hover on sidebar
  jQuery('#sidebar').hover(
    function () {
      jQuery("#categories a").addClass("opacity-1");
      jQuery("#contact").addClass("opacity-1");
    }, 
    function () {
      jQuery("#categories a").removeClass("opacity-1");
      jQuery("#contact").removeClass("opacity-1");
    }
  );

});
