import Proptypes from 'prop-types';

export default function Image( {src, caption}) {
  return <img src={src} alt={caption} />
} 

Image.propTypes = {
  imageSrc: Proptypes.string.isRequired,
  caption: Proptypes.string.isRequired
}