import { useState, useEffect, createContext, ReactNode, useMemo } from 'react'
import { fetchAllPhotos, updatePhotoTitle } from '../services/requests'
import { Photo } from '../interfaces/typings'

interface IPhoto {
  photos: Photo[] | null
  loading: boolean
  updateTitle: (photoDetails: Photo) => Promise<any>
  filterAlbumPhotos: (albumId: string) => Promise<any>
  findPhoto: (photoId: string) => Promise<any>
}

export const PhotoContext = createContext<IPhoto>({
  photos: [],
  loading: true,
  updateTitle: async () => {},
  filterAlbumPhotos: async () => {},
  findPhoto: async () => {},
})

export const PhotoProvider = ({ children }: { children: ReactNode }) => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    // fetch all photos
    async function fetchData() {
      const response = await fetchAllPhotos()
      setPhotos(response)
    }
    fetchData()
  }, [])

  // update photo title
  const updateTitle = async (photoDetails: Photo) => {
    setLoading(true)
    const data = await updatePhotoTitle(photoDetails)
    const updatedRes = data.photoDetails
    // find photo index to be updated
    const currentPhotoIndex = photos.findIndex(
      (photo) => photo.id === updatedRes.id
    )
    const updatedPhotoDetails = {
      ...photos[currentPhotoIndex],
      title: updatedRes.title,
    }
    const newPhotos = [
      ...photos.slice(0, currentPhotoIndex),
      updatedPhotoDetails,
      ...photos.slice(currentPhotoIndex + 1),
    ]
    setPhotos(newPhotos)
    setLoading(false)
    return data
  }

  // get photos for a single album
  const filterAlbumPhotos = async (albumId: string) => {
    const res = photos.filter((photo: Photo) => {
      return photo.albumId === Number(albumId)
    })
    return res
  }

  // get single photo album
  const findPhoto = async (photoId: string) => {
    const res = photos.find((photo: Photo) => {
      return photo.id === Number(photoId)
    })
    return res
  }

  // memoized context values to prevent re-renders
  const memoedValue = useMemo(
    () => ({
      photos,
      loading,
      updateTitle,
      filterAlbumPhotos,
      findPhoto,
    }),
    [photos, loading, updateTitle, filterAlbumPhotos, findPhoto]
  )

  return (
    <PhotoContext.Provider value={memoedValue}>
      {children}
    </PhotoContext.Provider>
  )
}
