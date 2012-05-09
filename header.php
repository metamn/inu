<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Inu Chivu</title>
    
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/css/base.css" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/css/layout.css" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/css/mobile.css" media="screen and (max-width: 1024px)" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/css/wide.css" media="screen and (min-width: 1025px) and (max-width: 1399px)" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/css/large.css" media="screen and (min-width: 1400px)" />    
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/css/theme.css" />    
    
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
    <script type="text/javascript" src="<?php bloginfo('stylesheet_directory')?>/js/jquery.init.js"></script>
    
    <link href='http://fonts.googleapis.com/css?family=Quicksand:300,400,700' rel='stylesheet' type='text/css'>
    <?php wp_head(); ?>
  </head>
  
  <body>
        
    <div class="container">
  
    <header id="header" class="block">
      <hgroup>
        <h1><a title="inu chivu" href="<?php bloginfo('home')?>">Inu Chivu</a></h1>
        <div class="line"></div>
      </hgroup>
    
      <nav>
        <ul id="categories">
          <li class="active"><h2><a title="Latest Photos" href="<?php bloginfo('home')?>">Latest Photos</a></h2></li>
          
          <?php $cats = get_categories();            
            if ($cats) {            
              foreach ($cats as $c) { ?>
                <li>
                  <h2>
                    <a href="<?php echo get_category_link( $c->term_id ) ?>" title="<?php echo $c->name ?>"><?php echo $c->name ?></a>
                  </h2>
                </li>                
              <?php }            
            } ?>
            
            <li class="spacer"></li>
            
          <?php $pages = get_pages();
            if ($pages) {
              foreach ($pages as $p) { ?>
                <li>
                  <h2>
                    <a href="<?php echo get_page_link( $p->ID ) ?>" title="<?php echo $p->post_title ?>"><?php echo $p->post_title ?></a>
                  </h2>
                </li>                
              <?php } 
            }          
          ?>
          
          
          
          <!--
          
          <li id="morocco" class="first"><h2><a title="Morocco" href="/">morocco</a></h2></li>
          <li><h2><a title="Mongolia" href="/">mongolia</a></h2></li>
          <li><h2><a title="Laos" href="/">laos</a></h2></li>
          <li><h2><a title="Men at Work" href="/">action</a></h2></li>
          <li><h2><a title="Portraits" href="/">portraits</a></h2></li>
          <li><h2><a title="Places" href="/">places</a></h2></li>
          <li id="contact"><h2><a title="Contact" href="/contact">contact</a></h2></li>
          <li><h2><a title="Friends" href="/">friends</a></h2></li>
          -->
        </ul>
        
        <div id="icons">
          <span id="menu">></span>
          <span id="thumbs">:::</span>
        </div>
      </nav>
    </header>
    
    
    
  

