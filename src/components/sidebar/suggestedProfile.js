import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SuggestedProfile({ userDocId, username, profileId, userId}) {
const [followed, setfollowed] = useState(false)

  async function handleFollowUsers() {
    setfollowed(true)
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
            Folllow
          </button>
      </div>
    </div>
  ) : null
}

SuggestedProfile.propTypes = {
  userDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired


}