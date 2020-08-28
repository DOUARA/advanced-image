/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import AdvancedImageEdit from './edit.js';
import AdvancedImageSave from './save.js';

/**
 * Import CSS
 */
import './editor.scss';
import './style.scss';

/**
 * Register: Advanced Image Block
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'divi-den/block-advanced-image', {
	title: __( 'Advanced Image' ),
	icon: 'format-image',
	category: 'common',
	keywords: [ __( 'advanced-image' ), __( 'image' ), __( 'picture' ) ],

	attributes: {
		url: {
			type: 'string',
		},

		id: {
			type: 'string',
		},

		altText: {
			type: 'string',
		},

		title: {
			type: 'string',
		},

		titleLevel: {
			type: 'string',
			default: 'h2',
		},

		titleColor: {
			type: 'string',
		},
	},

	/**
	 *
	 * edit Function
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => AdvancedImageEdit( props ),

	/**
	 *
	 * save function
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => AdvancedImageSave( props ),
} );
