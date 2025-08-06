import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorAdvancedControls } from '@wordpress/block-editor';
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { EXTENDED_BLOCKS } from './consts';

/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
const withAdvancedControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		if (!EXTENDED_BLOCKS.includes(props.name)) {
			return <BlockEdit {...props} />;
		}

		const { attributes, setAttributes, isSelected } = props;

		const { jUtilsScroll, jUtilsSticky, jUtilsSpacer } = attributes;

		return (
			<>
				<BlockEdit {...props} />
				{isSelected && (
					<InspectorAdvancedControls>
						<ToggleControl
							label={__('Scroll Classes')}
							checked={!!jUtilsScroll}
							onChange={() =>
								setAttributes({
									jUtilsScroll: !jUtilsScroll,
								})
							}
							help={
								!!jUtilsScroll
									? __('Add scroll classes.')
									: __('No scroll classes.')
							}
						/>
						<ToggleControl
							label={__('Sticky Class')}
							checked={!!jUtilsSticky}
							onChange={() =>
								setAttributes({
									jUtilsSticky: !jUtilsSticky,
								})
							}
							help={
								!!jUtilsSticky
									? __('Add sticky class.')
									: __('No sticky class.')
							}
						/>
            {!!jUtilsSticky && (
              <ToggleControl
              label={__('Use spacer')}
              checked={!!jUtilsSpacer}
              onChange={() =>
                setAttributes({
                  jUtilsSpacer: !jUtilsSpacer,
                })
              }
              help={
                !!jUtilsSpacer
                  ? __('Add spacer to sticky.')
                  : __('No spacer.')
              }
            />
            )}
					</InspectorAdvancedControls>
				)}
			</>
		);
	};
}, 'withAdvancedControls');

addFilter('editor.BlockEdit', 'jcore/utils-blocks-editor', withAdvancedControls);
