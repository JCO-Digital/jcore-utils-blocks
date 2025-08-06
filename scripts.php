<?php
/**
 * Scripts
 *
 * @package Jcore\UtilsBlocks\Scripts
 */

namespace Jcore\UtilsBlocks\Scripts;

/**
 * Enqueue editor scripts
 *
 * @return void
 */
function enqueue_scripts(): void {
	$dependencies_file = JCORE_UTILS_BLOCKS_PATH . 'build/jutils-blocks.asset.php';

	if ( ! file_exists( $dependencies_file ) ) {
		return;
	}

	$dependencies = require $dependencies_file;
	wp_enqueue_script(
		'jcore-utils-blocks',
		JCORE_UTILS_BLOCKS_URL . 'build/jutils-blocks.js',
		$dependencies['dependencies'],
		$dependencies['version'],
		true
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_scripts' );
