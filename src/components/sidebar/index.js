// import '../../wdyr';
import React, {memo} from 'react';
import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions.js';

const Sidebar = () => {


    const {
      user: {fullName, username, userId, following}
    } = useUser()
      // console.log("data", fullName, username, userId, following );
    return (
    <div className='gray'>
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} following = {following} />
    </div>
  )
}  

export default Sidebar;
