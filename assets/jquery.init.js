jQuery(document).ready(function(){

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
  jQuery("#images #image").addClass('opacity-0');
  jQuery("#images #image:first").removeClass('opacity-0');
  jQuery("#images #image:first").addClass('active');
  
  // Show the next photo comming
  jQuery("#images #image").hover(
    function () {
      if (!(jQuery(this).hasClass('active'))) {
        jQuery(this).removeClass("opacity-0");
      }      
    }, 
    function () {
      if (!(jQuery(this).hasClass('active'))) {
        jQuery(this).addClass("opacity-0");
      }
    }
  );
  // Show the next photo
  jQuery("#images #image").click(function() {
    if (jQuery(this).hasClass('active')) {
      // hide current image
      jQuery(this).addClass('hidden');
      jQuery(this).removeClass('active');
      // show the  next image
      jQuery(this).next().addClass('active');    
      jQuery(this).next().removeClass('opacity-0');
    } else {
      // hide previous image
      jQuery(this).prev().addClass('hidden');
      jQuery(this).prev().removeClass('active');
      // show the  next image
      jQuery(this).addClass('active');    
      jQuery(this).removeClass('opacity-0');
    }
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
