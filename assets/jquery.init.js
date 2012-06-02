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
  jQuery("#header #thumbs").click(function() {
    jQuery("#content #thumbs").slideToggle();
  });
  
  // Click on Thumbs 
  jQuery("#content #thumbs .thumb").click(function() {
    jQuery("#content #thumbs").slideUp();    
    jQuery("#images .image").attr('style', '');
    
    var id = jQuery(this).attr('id');
    id = id.replace("thumb", "image");
    var img = jQuery("#images #" + id);
            
    scroll(img.prev(), img);      
  });
  
  
  // Click on photo
  jQuery("#images .image").click(function() {    
    jQuery(this).removeClass('active');   
    scroll(jQuery(this), jQuery(this).next());              
  });
  // Show only the first photo
  jQuery("#images .image").first().addClass('active');
  
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
