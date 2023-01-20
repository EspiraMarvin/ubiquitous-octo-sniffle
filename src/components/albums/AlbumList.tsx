import { User, UserAlbum } from '../../interfaces/typings'
import AlbumItem from './AlbumItem'

interface AlbumListProps {
  userAlbums?: UserAlbum[]
  user: User
}

function AlbumList({ userAlbums, user }: AlbumListProps) {
  return (
    <div>
      <header className="mt-4 mb-8 text-center text-lg">Albums List</header>
      {userAlbums?.map((album: any) => (
        <AlbumItem key={album.id} user={user} album={album} />
      ))}
    </div>
  )
}

export default AlbumList
