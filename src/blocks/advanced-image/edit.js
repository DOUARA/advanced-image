/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
	MediaPlaceholder,
	RichText,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	ColorPalette,
	TextareaControl,
} from '@wordpress/components';

/**
 *
 * block edit function
 *
 * @param {Object} props Props.
 * @returns {Mixed} JSX Component.
 */
export default function AdvancedImageEdit( {
	attributes,
	setAttributes,
	className,
} ) {
	const { id, url, title, titleLevel, titleColor, altText } = attributes;

	// updates url attribute on selecting an image
	function onSelectImage( media ) {
		setAttributes( { url: media.url, id: media.id } );
	}

	// updates url attribute on adding a url
	function onSelectURL( newUrl ) {
		setAttributes( { url: newUrl } );
	}

	const mediaPlaceholder = (
		<MediaPlaceholder
			icon="format-image"
			onSelect={ onSelectImage }
			value={ { id } }
			accept="image/*"
			allowedTypes={ [ 'image' ] }
			disableMediaButtons={ url }
			onSelectURL={ onSelectURL }
		/>
	);

	const colorsList = [
		{ name: 'red', color: '#f00' },
		{ name: 'blue', color: '#00f' },
		{ name: 'green', color: '#24821f' },
		{ name: 'purple', color: '#7926a6' },
		{ name: 'orange', color: '#eeaf29' },
	];

	const headingOptions = [
		{ value: 'h1', label: 'h1' },
		{ value: 'h2', label: 'h2' },
		{ value: 'h3', label: 'h3' },
		{ value: 'h4', label: 'h4' },
		{ value: 'h5', label: 'h5' },
		{ value: 'h6', label: 'h6' },
	];

	return (
		<Fragment>
			<BlockControls>
				{ url && (
					<MediaReplaceFlow
						mediaId={ id }
						mediaURL={ url }
						allowedTypes={ [ 'image' ] }
						accept="image/*"
						onSelect={ onSelectImage }
						onSelectURL={ onSelectURL }
					/>
				) }
			</BlockControls>

			<InspectorControls>
				<PanelBody
					title={ __( 'Image Settings' ) }
					initialOpen={ true }
				>
					<TextareaControl
						label={ __( 'Alt text (alternative text)' ) }
						value={ altText }
						onChange={ ( value ) =>
							setAttributes( { altText: value } )
						}
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Title Settings' ) }
					initialOpen={ true }
				>
					<SelectControl
						label={ __( 'Level' ) }
						value={ titleLevel }
						onChange={ ( value ) => {
							setAttributes( { titleLevel: value } );
						} }
						options={ headingOptions }
					/>
					<span>Color</span>
					<ColorPalette
						colors={ colorsList }
						value={ titleColor }
						onChange={ ( value ) =>
							setAttributes( { titleColor: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div className={ classnames( className, 'blocks-advanced-image' ) }>
				{ url && (
					<Fragment>
						<img alt={ altText } src={ url } />
						<RichText
							tagName={ titleLevel }
							placeholder={ __( 'Write title…' ) }
							onChange={ ( value ) =>
								setAttributes( { title: value } )
							}
							value={ title }
							inlineToolbar
							style={ { color: titleColor } }
							className="blocks-advanced-image__title"
						/>
					</Fragment>
				) }

				{ mediaPlaceholder }
			</div>
		</Fragment>
	);
}
