/*

  - Animations for the menu and looping through the posts / images

*/

jQuery(document).ready(function(){
  
  // Categories navigation
  // - according to the requirement the active category must be differentiated from the rest by showing the two icons at the left side
  
  jQuery("#categories li").hide();
  
  var str = jQuery("#categories li.active h2").first().html() + jQuery("#icons").html();
  jQuery("#categories li.active h2").html(str);
  jQuery("#categories li.active").show();
  
  jQuery("#menu").click(function() {
    jQuery("#categories li").show('slow');
    jQuery("#category-image").show('slow');
  });
  
  
  
    
  // Show Thumbs 
  jQuery("#header #thumbs").click(function() {
    jQuery("#content #thumbs").slideToggle();
  });
  
  
  
  
  // Click on a thumbnail 
  // - will display the clicked thumbnail as a large image
  
  jQuery("#content #thumbs .thumb").click(function() {
    jQuery("#content #thumbs").slideUp();    
    
    // Reset all big images
    jQuery("#images .image").attr('style', '');
    jQuery("#images .image").addClass('inactive');
    jQuery("#images .image").removeClass('active');
    
    
    // Show the current image
    var id = jQuery(this).attr('id');
    id = id.replace("thumb", "image");
    var img = jQuery("#images #" + id);
    
    img.removeClass('inactive');
    scroll(img.prev(), img);          
  });
  
  
  // Click on photo
  jQuery("#images .image").click(function() {    
    jQuery(this).removeClass('active');   
    scroll(jQuery(this), jQuery(this).next());              
  });
  // Show only the first photo
  jQuery("#images .image").first().addClass('active');
  
  
  // The scrolling effect
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
    next.removeClass('inactive');      
  }

  
  
});
