import { addFilter } from '@wordpress/hooks';
import { createElement } from '@wordpress/element';
import { EXTENDED_BLOCKS } from './consts';

const modifyBlockSaveProps = (element, blockType, attributes) => {
    // Check for specific block types if needed
    if (!EXTENDED_BLOCKS.includes(blockType.name)) {
        return element;
    }

    const extraProps = {}
    if (!!attributes.jUtilsScroll) {
      extraProps['data-jscroll'] = 'true';
    }
    if (!!attributes.jUtilsSticky) {
      extraProps['data-jsticky'] = 'true';
      if (!attributes.jUtilsSpacer) {
        extraProps['data-jsticky-no-spacer'] = 'true';
      }
    }


    // Clone the element and modify props
    return createElement(
        element.type,
        {
            ...element.props,
            ...extraProps
        },
        element.props.children
    );
};

// Hook into the filter
addFilter(
    'blocks.getSaveElement',
    'jcore/modify-block-save-props',
    modifyBlockSaveProps
);
