import {useState, useEffect} from "react";
import PropTypes from 'prop-types'

export default function Suggestions ({userId}){
  const [profile, setProfile] = useState()

  

  return (
    <p>I am a Suggestions</p>
  )
}

Suggestions.propTypes = {
  userId: PropTypes.string
}