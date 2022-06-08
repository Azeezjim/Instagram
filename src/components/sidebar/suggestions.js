import {useState, useEffect} from "react";
import PropTypes from 'prop-types'
import Skeleton from "react-loading-skeleton";

export default function Suggestions ({userId}){
  const [profile, setProfile] = useState(null)

  

  return  !profile ? (
    <Skeleton coount={10} height={150} className="mt-5" />
  ) : ( <h1>Hello</h1>)
}

Suggestions.propTypes = {
  userId: PropTypes.string
}