import { addFilter } from '@wordpress/hooks';
import { EXTENDED_BLOCKS } from './consts';

/**
 * Add custom attribute to check if we should use the focal point.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes(settings) {
	if (
		typeof settings.attributes !== 'undefined' &&
		EXTENDED_BLOCKS.includes(settings.name)
	) {
		settings.attributes = Object.assign(settings.attributes, {
			jUtilsScroll: {
				type: 'boolean',
				default: false,
			},
			jUtilsSticky: {
				type: 'boolean',
				default: false,
			},
			jUtilsSpacer: {
				type: 'boolean',
				default: true,
			},
		});
	}

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'jcore/utils-blocks-attributes',
	addAttributes
);
