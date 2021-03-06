<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Inu Chivu</title>
    
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/assets/base.css" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/assets/layout.css" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/assets/mobile.css" media="screen and (max-width: 1024px)" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/assets/wide.css" media="screen and (min-width: 1025px) and (max-width: 1399px)" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/assets/large.css" media="screen and (min-width: 1400px)" />    
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory')?>/assets/theme.css" />    
    
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
    <script type="text/javascript" src="<?php bloginfo('stylesheet_directory')?>/assets/jquery.init.js"></script>
    
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
    
      <?php wp_nav_menu( array(
        'container' => 'nav'      
      )); ?> 
        
      <div id="icons">
        <span id="menu">></span>
        <span id="thumbs">:::</span>
      </div>
    </header>
    
    
    
  

