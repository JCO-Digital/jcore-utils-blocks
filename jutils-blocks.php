<?php
/**
 * Plugin Name: JCORE Utils Blocks
 * Plugin URI: https://github.com/jco-digital/jcore-utils-blocks
 * Description: JCORE module that adds jutils data tag selectors to blocks.
 * Version: 0.2.1
 * Author: J&CO Digital <support@jco.fi>
 * Author URI: https://jco.fi
 * Text Domain: jcore-utils-blocks
 * Domain Path: /languages
 *
 * @package Jcore\UtilsBlocks
 */

use Jcore\UtilsBlocks;

if ( is_file( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once __DIR__ . '/vendor/autoload.php';
}

require_once __DIR__ . '/consts.php';
require_once __DIR__ . '/scripts.php';


add_action(
	'init',
	static function () {
		load_plugin_textdomain( 'jcore-utils-blocks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
	}
);
