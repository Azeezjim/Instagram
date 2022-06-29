import { useRef } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Image from './image'


export default function Post (content) {
  console.log('content', content);
  return (
    <div  className="rounded col-span-4 bg-white border-gray-primary mb-8">
      <Header username={ content?.content.username} /> 
      <Image src={content?.content.imageSrc} caption={content?.content.caption} />
    </div>
  )
} 

Post.propTypes = {
  content : PropTypes.shape({
    username : PropTypes.string.isRequired,
    imageSrc : PropTypes.string.isRequired,
    caption : PropTypes.string.isRequired,
    docId : PropTypes.string.isRequired,
    userLikedPhoto : PropTypes.bool.isRequired,
    likes  : PropTypes.array.isRequired,
    comment  : PropTypes.array.isRequired,
    dataCreted  : PropTypes.number.isRequired
  })
}