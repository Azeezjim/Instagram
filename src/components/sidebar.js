import useUser from '../hooks/use-user'

export default function Sidebar() {


    const {
      user: {fullName, usernmae, userId}
    } = useUser()

    return (
    <div className='gray'>
      <User />
    <Suggestions />
    </div>
  )
}  

