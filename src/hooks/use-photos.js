import { useEffect } from "react";
import {useState, useEffet, useContext } from "react";
import UserContext from '../context/user'

export default function usePhotos() {
  const [photos, usePhotos] = useState[null];
   
  const {
    user: {uid: userId =''
  }
  } = useContext(UserContext);4

  useEffect(() => {
    async function getTimelinePhotos(){
      const followingUserId =
    }
  }, [])

  return {photos }
}