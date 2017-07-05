<?php
/**
 * Plugin Name: SC GridSystem
 * Plugin URI: https://profiles.wordpress.org/sergiuscosta
 * Description: A simple GridSystem you could use with Shortcodes
 * Version: 1.0.0
 * Author: Sergio Costa
 * Author URI: http://sergiocosta.net.br/
 * Text Domain: scgs
 * License: GPLv2 or later
 */


// enqueue files
add_action( 'wp_enqueue_scripts', 'sc_gridsystem_files' );
function sc_gridsystem_files() { 
    wp_enqueue_style( 'sc-gridsystem', plugins_url( 'css/sc-gridsystem.css', __FILE__ ), array(), null, 'all' );
}

require_once(plugin_dir_path( __FILE__ ) . 'functions/shortcode.php');

?>