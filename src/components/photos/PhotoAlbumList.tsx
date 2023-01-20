import { ReactNode, FC } from 'react'
import { Link } from 'react-router-dom'
import { Photo } from '../../interfaces/typings'
import PhotoAlbumItem from './PhotoAlbumItem'

interface AlbumPhotoListProps {
  albumPhotos: Photo[] | any
  userId: number
  albumId: number
}

function AlbumPhotoList({
  userId,
  albumId,
  albumPhotos,
}: AlbumPhotoListProps): any {
  return albumPhotos?.map((photo: Photo, index: number) => (
    <Link
      to={`/users/${userId}/albums/${albumId}/photos/${photo.id}`}
      key={index}
      data-testid={`photo-album-${index}`}
    >
      <PhotoAlbumItem photo={photo} />
    </Link>
  ))
}

export default AlbumPhotoList
