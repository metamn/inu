<?php

// Get post attachements
function post_attachments($post_id) {  
  $args = array(
	  'post_type' => 'attachment',
	  'numberposts' => -1,
	  'post_status' => null,
	  'post_parent' => $post_id,
	  'orderby' => 'menu_order',
	  'order' => 'ASC'
  ); 
  $attachments = get_posts($args);
  return $attachments;
}


// Register Nav Menu
function mytheme_addmenus() {
	register_nav_menus(
		array(
			'main_nav' => 'The Main Menu',
		)
	);
}
add_action( 'init', 'mytheme_addmenus' );


?>
