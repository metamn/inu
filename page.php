<?php 

/* A simple template to display page content
*/

?>


<?php get_header(); ?>

<section id="content" class="page block"> 
  <?php if ( have_posts() ) : ?>
	  <?php while ( have_posts() ) : the_post(); ?>	    
      <article>
        <header class="hidden entry-header">
				  <h1 class="entry-title"><?php the_title() ?></h1>
			  </header>
			  <div class="entry-content">
				  <?php the_content(); ?>
			  </div>
      </article>      
		<?php endwhile; ?>
  <?php else : ?>
  	<article id="post-0" class="post no-results not-found">
			<header class="entry-header">
				<h1 class="entry-title"><?php _e( 'Nothing Found', 'twentyeleven' ); ?></h1>
			</header><!-- .entry-header -->

			<div class="entry-content">
				<p><?php _e( 'Apologies, but no results were found for the requested archive. Perhaps searching will help find a related post.', 'twentyeleven' ); ?></p>
				<?php get_search_form(); ?>
			</div><!-- .entry-content -->
		</article><!-- #post-0 -->
  <?php endif; ?>
</section>

<?php get_footer(); ?>
