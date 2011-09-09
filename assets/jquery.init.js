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


  // Image slide and slideshow
  // - single click to slide
  // - double click to slideshow  
  
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
    if (!(next.hasClass('last'))) {
      next.addClass('active');
      next.removeClass('opacity-0');
    } else {
      next.hide();
      jQuery("#icons").show("slow");
      jQuery("#message").addClass("opacity-0");
    }    
  }
  
  function singleClick(e) {
    if (jQuery(this).hasClass('active')) {
      // click on the active image
      scroll(jQuery(this), jQuery(this).next());            
    } else {
      // click on the next image
      scroll(jQuery(this).prev(), jQuery(this));
    }
    jQuery("#message").addClass('opacity-0');
  }

  function doubleClick(e) {
    jQuery("#message").addClass('opacity-0');
    jQuery("#images #image").each(function(index) {
      if (!(jQuery(this).next().hasClass('last'))) {
        scroll(jQuery(this).delay(5000*index), jQuery(this).next());
      }
    });
  }

  // Manage click and double click
  jQuery("#images #image").click(function(e) {
    var that = this;
    setTimeout(function() {
        var dblclick = parseInt($(that).data('double'), 10);
        if (dblclick > 0) {
            $(that).data('double', dblclick-1);
        } else {
            singleClick.call(that, e);
        }
    }, 300);
  }).dblclick(function(e) {
      $(this).data('double', 2);
      doubleClick.call(this, e);
  });

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
