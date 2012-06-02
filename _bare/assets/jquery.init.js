jQuery(document).ready(function(){

  // Main menu
  // Show current menu item only
  jQuery("#menu-main li").hide();
  jQuery("#menu-main li.current-menu-item").show();


  // Display a single photo / post at once
  jQuery("#content article").hide();
  jQuery("#content article").first().show();
  
});

