import {useState, useEffect} from "react";
import PropTypes from 'prop-types'
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from '../../services/firebase'

export default function Suggestions ({userId, following}) {
  const [profiles, setProfiles] = useState(null)

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response)
    }
      if (userId) {
        suggestedProfiles()
      }
  }, [userId])

  return  !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length < 0  ? (
      <div className="rounded flex flex-col">
        <div className="text-sm flex items-center justify-between mb-2">
          <p className="flex-bold text-gray-base">Suggestions for you</p>          
        </div>
        <div className="mt-4 grid gap-5 ">
          {profiles.map((profile) => (
            <suggestedProfile 
              key={profile.docId}
              userDocd={profile.docId}
              username={profile.usernmae}
              profileId={profile.userId}
              userId={userId}
            />
          ))}
        </div>
      </div>
  ) : null 
}

Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array
}