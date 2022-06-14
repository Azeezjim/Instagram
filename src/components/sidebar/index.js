// import '../../wdyr';
import React, {memo} from 'react';
import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions.js';

const Sidebar = () => {


    const {
      user: {docId, fullName, username, userId, following}
    } = useUser()
    console.log("docId", docId)
    return (
    <div className='gray'>
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} following = {following} loggedInUserDocId={docId} />
    </div>
  )
}  

export default Sidebar;
 