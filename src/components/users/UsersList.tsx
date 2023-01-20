import { Link } from 'react-router-dom'
import { UserAlbum } from '../../interfaces/typings'
import UserListItem from './UserListItem'

interface UsersListProps {
  users?: UserAlbum[]
}
function UsersList({ users }: UsersListProps): any {
  return users?.map((user: UserAlbum) => (
    <div className="" key={user.id}>
      <Link to={`/users/${user.id}`}>
        <UserListItem user={user} />
      </Link>
    </div>
  ))
}

export default UsersList
