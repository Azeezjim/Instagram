import PropTypes  from "prop-types"
import { Link } from 'react-router-dom'
import Skeleton from "react-loading-skeleton"

export default function User (username, fullName){
  return (
    <p>I am a User</p>
  )
}

User.propTypes ={
  username: PropTypes.string,
  fullname: PropTypes.string
}