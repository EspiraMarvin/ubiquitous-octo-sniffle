import { Album } from '../../interfaces/typings'
import Loader from '../ui/Loader'

interface AlbumDetailsProps {
  albumInfo?: Album
}
function AlbumDetails({ albumInfo }: AlbumDetailsProps) {
  if (!albumInfo)
    return (
      <div className="flex justify-center items-center">
        <Loader color="blue" />
      </div>
    )
  return (
    <div className="text-center py-3">
      Title: <span className="font-bold capitalize">{albumInfo.title}</span>
    </div>
  )
}

export default AlbumDetails
