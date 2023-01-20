import { Album } from '../../interfaces/typings'
import Loader from '../ui/Loader'

interface AlbumDetailsProps {
  albumInfo?: Album
}
function AlbumDetails({ albumInfo }: AlbumDetailsProps) {
  if (!albumInfo)
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader color="blue" />
      </div>
    )
  return (
    <div>
      <div className="text-center py-4">
        Title: <span className="font-bold capitalize">{albumInfo.title}</span>
      </div>
    </div>
  )
}

export default AlbumDetails
