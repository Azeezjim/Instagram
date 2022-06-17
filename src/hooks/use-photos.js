import { useEffect } from "react";
import {useState, useEffet, useContext } from "react";
import UserContext from '../context/user'
import { getUserByUserId, getTimelinePhotos } from "../services/firebase";

export default function usePhotos() {
  const [photos, usePhotos] = useState[null];
  
  const {
    user: {uid: userId =''
  }
  } = useContext(UserContext);4

  useEffect(() => {
    async function getTimelinePhotos(){
      const { following } = await getUserByUserId(userId) 
      let followedUserPhotos = []

      if (following.length > 0) {
        followedUserPhotos = await getTimelinePhotos( userI d, following)
      }
    }
  }, [])

  return {photos }
}