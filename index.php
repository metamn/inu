<?php get_header(); ?>

<section id="content" class="block">         
  
  <div id="thumbs" class="block">  
    <?php if ( have_posts() ) { 
      $counter = 1; 
      
      while ( have_posts() ) : the_post(); 
		    
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

</section>

<?php get_footer(); ?>
