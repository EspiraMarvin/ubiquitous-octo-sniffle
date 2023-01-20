import { Link } from 'react-router-dom'
import { Album, User } from '../../interfaces/typings'

interface AlbumItemProps {
  album: Album
  user: User
}
function AlbumItem({ album, user }: AlbumItemProps) {
  return (
    <Link to={`/users/${user.id}/albums/${album.id}`}>
      <div className="capitalize p-2 bg-gray-200 m-4 pl-2 py-1 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-all">
        {album.title}
      </div>
    </Link>
  )
}

export default AlbumItem
