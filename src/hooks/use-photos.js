import {useState, useEffect, useContext } from "react";
import UserContext from '../context/user'
import { getUserByUserId, getPhotos } from "../services/firebase";

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  
  const
    {user:  { uid: userId ='' } }
    = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
      const [{ following }] = await getUserByUserId(userId)
      let followedUserPhotos = [];

        // console.log('userFollowedPhotos', userFollowedPhotos);
      console.log(
        'following' , following
      )
        if (following.length > 0) {
        followedUserPhotos = await getPhotos( userId, following)
      }

      followedUserPhotos.sort((a, b) => b.dadeCreated - a.dadeCreated);
      setPhotos(followedUserPhotos)
    }
    getTimelinePhotos()
  }, [userId]);

  return {photos};
}