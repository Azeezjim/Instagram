import { useRef } from 'react'
import PropTypes from 'prop-types'
import Header from '../header'

export default function Post ({ contnt }) {
  return (
    <div>
      <Header username={contnt.username} />
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