import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions.js';

export default function Sidebar() {


    const {
      user: {fullName, username, userId}
    } = useUser()

    return (
    <div className='gray'>
      <User />
    <Suggestions  />
    </div>
  )
}  

