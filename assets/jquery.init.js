/*

  - Animations for the menu and looping through the posts / images

*/

jQuery(document).ready(function(){
  
  // Show categories
  jQuery("#header #icons #menu").click(function() {
    jQuery("#categories li").show('slow');
    jQuery("#content").slideUp();
  });
    
  // Show Thumbs 
  jQuery("#header #icons #thumbs").click(function() {
    jQuery("#content #thumbs").slideToggle();
    jQuery("#content #images").slideUp();
  });
  
  // Invert colors
  jQuery("#header #icons #change-color").click(function() {
    jQuery('body').toggleClass('inverted');
    if (jQuery('body').hasClass('inverted')) {
      jQuery.cookie('color-scheme', 'inverted', { path: '/' })
    } else {
      jQuery.removeCookie('color-scheme', { path: '/' });
    }
  });
  
  // Set color scheme based on cookies
  if (jQuery.cookie('color-scheme')) {
    jQuery('body').addClass('inverted');
  }
    
  
  
  
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
    if (next.length == 0) {
      jQuery("#categories li").show('slow');
      jQuery("#content").slideUp();
    } else {
      next.addClass('active');  
      next.removeClass('inactive');
    }
  }
  
});
