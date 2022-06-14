import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateLoggedInUserFollowing, updateLoggedInUserFollowers } from '../../services/firebase'

export default function SuggestedProfile({ profileDocId, username, profileId, userId, loggedInUserDocId}) {
const [followed, setfollowed] = useState(false)

  async function handleFollowUsers() {
    setfollowed(true)

    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false) 

    await  (profileDocId, userId, false)  
  }

  return  !followed ? (
    <div className="flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img 
        className="rounded-full w-8 flex mr-3"
        src={`/images/avatars/${username}.jpg`} alt=""/>
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
          <button
            className="text-xs font-bold text-blue-medium"
            type="button"
            onClick= {handleFollowUsers}
          > 
            Follow
          </button>
      </div>
    </div>
  ) : null
}

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired
}