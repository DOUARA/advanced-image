/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * Wordpress dependencies
 */
import { RichText } from '@wordpress/block-editor';

/**
 *
 * block save function
 *
 * @param {Object} props Props.
 * @returns {Mixed} JSX Component.
 */
export default function AdvancedImageSave( { className, attributes } ) {
	const { titleLevel, title, url, titleColor, altText } = attributes;
	return (
		<div className={ classnames( className, 'blocks-advanced-image' ) }>
			<img alt={ altText } src={ url } />
			<RichText.Content
				className="blocks-advanced-image__title"
				tagName={ titleLevel }
				value={ title }
				style={ { color: titleColor } }
			/>
		</div>
	);
}
