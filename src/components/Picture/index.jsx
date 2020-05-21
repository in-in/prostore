import PropTypes from 'prop-types';

export const Picture = ({ alt, name, path }) => {
	const src = path + name;

	return (
		<picture>
			<source
				srcSet={`${src}@1x.webp 1x, ${src}@2x.webp 2x, ${src}@3x.webp 3x`}
				type="image/webp"
			/>
			<source
				srcSet={`${src}@1x.jpg 1x, ${src}@2x.jpg 2x, ${src}@3x.jpg 3x`}
				type="image/jpeg"
			/>
			<img
				src={`${src}@1x.jpg`}
				alt={alt}
			/>
		</picture>
	);
};

Picture.defaultProps = {
	'path': '/images/',
};

Picture.propTypes = {
	'alt': PropTypes.string.isRequired,
	'name': PropTypes.string.isRequired,
	'path': PropTypes.string,
};
