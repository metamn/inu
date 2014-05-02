<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Inu Chivu</title>
    
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/assets/base.css" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/assets/layout.css?20130703a" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/assets/theme.css?20130703" />    
    
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/assets/mobile.css" media="screen and (max-width: 640px)" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/assets/tablet.css" media="screen and (min-width: 641px) and (max-width: 1024px)" />
    
    
    <link href='http://fonts.googleapis.com/css?family=Quicksand:300,400,700' rel='stylesheet' type='text/css'>
    <?php wp_head(); ?>
  </head>
  
  <body> 
    <div class="container">  
    <header id="header" class="block">
      <hgroup>
        <h1>
          <a title="Inu Chivu" href="<?php echo get_bloginfo('url')?>">Inu Chivu</a>
        </h1>
        <p>photographer</p>
        <div class="line"></div>
      </hgroup>
    
      <nav>
        <ul id="categories">
          <?php $cats = get_categories('orderby=count');            
            if ($cats) { 
              $current = single_cat_title('', false);           
              foreach ($cats as $c) { 
                $klass = '';
                if ($current == $c->name) {
                  $klass = 'active';
                }
              ?>
                <li class="<?php echo $klass?>">
                  <h2>
                    <a href="<?php echo get_category_link( $c->term_id ) ?>" title="<?php echo $c->name ?>"><?php echo $c->name ?></a>
                  </h2>
                </li>                
              <?php }            
            } ?>
            
            <li class="spacer"></li>
            
            <?php $pages = get_pages();
              if ($pages) {
                $pagename = get_query_var('pagename');
                foreach ($pages as $p) { 
                  $klass = '';
                  if ($p->post_name == $pagename) {
                    $klass = 'active first';
                  }                  
                ?>
                  <li class="<?php echo $klass?>">
                    <h2>
                      <a href="<?php echo get_page_link( $p->ID ) ?>" title="<?php echo $p->post_title ?>"><?php echo $p->post_title ?></a>
                    </h2>
                  </li>                
                <?php } 
              }          
            ?>
        </ul>
        
        <div id="icons">
          <span id="menu">></span>
          <span id="thumbs" class="desktop">:::</span>
          <span id="change-color"></span>
        </div>
        
      </nav>
    </header>
    
    
    
  

