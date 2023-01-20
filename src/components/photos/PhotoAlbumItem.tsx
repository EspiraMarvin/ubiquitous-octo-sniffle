import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Photo } from '../../interfaces/typings'

interface AlbumPhotoItemProps {
  photo: Photo
}

function AlbumPhotoItem({ photo }: AlbumPhotoItemProps) {
  return (
    <div className="flex items-center m-4 pl-2 py-1 cursor-pointer hover:bg-gray-50">
      <LazyLoadImage
        className="w-10 h-10 rounded-full contain"
        src={photo?.thumbnailUrl}
        placeholder={
          <div className="w-10 h-10 bg-gray-200 text-white rounded-full"> </div>
        }
        alt={photo?.title}
      />
      <div className="ml-3">{photo?.title}</div>
    </div>
  )
}

export default AlbumPhotoItem
