<?php

/* The frontpage, the archives page, and the single post page
  - Since we present just a single image on any page at once, all these templates can be merged into one
  - Static pages are displayed with a separate template bacuse they do not deal with images and thumbnails
*/

?>

<?php get_header(); ?>

<section id="content" class="block"> 
  <?php if (is_home()) {
    /* The latest 10 photos are displayed at the frontpage
    */
    
    query_posts( 'posts_per_page=10' );  
  } ?>        
  
  <div id="thumbs" class="block">  
    <?php if ( have_posts() ) { 
      $counter = 1; 
      
      /* All thumbnails of a category are prepared here
      */
      
      while ( have_posts() ) : the_post(); 
		    
		    /* Thumbnails are simple image attachments to a post
		      - the function retrieving them can be found in functions.php
		    */
		    
		    $imgs = post_attachements($post->ID);
        $img = $imgs[0];
        $image = wp_get_attachment_image_src($img->ID, 'medium'); ?>
        
        <div id="thumb-<?php echo $counter ?>" class="thumb">
          <img src="<?php echo $image[0] ?>">
        </div>
        
			<?php $counter += 1; endwhile; ?> 
	  <?php } ?>   
  </div>
  
      
  <div id="images">  
    <?php if ( have_posts() ) {
    
      $counter = 1; 
      while ( have_posts() ) : the_post(); 
		    
		    $imgs = post_attachements($post->ID);
        $img = $imgs[0];
        $image = wp_get_attachment_image_src($img->ID, $size); ?>
        
        <div id="image-<?php echo $counter ?>" class="image">
          <img src="<?php echo $image[0] ?>">
        </div>
        
			<?php $counter += 1; endwhile; ?>
    <?php } else { ?>
    	<article id="post-0" class="post no-results not-found">
				<header class="entry-header">
					<h1 class="entry-title"><?php _e( 'Nothing Found', 'twentyeleven' ); ?></h1>
				</header><!-- .entry-header -->

				<div class="entry-content">
					<p><?php _e( 'Apologies, but no results were found for the requested archive. Perhaps searching will help find a related post.', 'twentyeleven' ); ?></p>
					<?php get_search_form(); ?>
				</div><!-- .entry-content -->
			</article><!-- #post-0 -->
	  <?php } ?>
  </div>
  
  <?php if (is_home()) {
    wp_reset_query(); 
  } ?>  

</section>

<?php get_footer(); ?>
