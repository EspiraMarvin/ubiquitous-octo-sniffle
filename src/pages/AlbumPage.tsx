import { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import usePhoto from '../hooks/usePhoto'

import { Album, Photo } from '../interfaces/typings'
import { fetchAlbum } from '../services/requests'

import PhotoAlbumList from '../components/photos/PhotoAlbumList'
import AlbumInfo from '../components/albums/AlbumDetails'
import Loader from '../components/ui/Loader'

function AlbumPage() {
  useTitle('Album Details')
  let { userId, albumId } = useParams()
  const { filterAlbumPhotos } = usePhoto()
  const navigate = useNavigate()

  const [albumInfo, setAlbum] = useState<Album>()
  const [albumPhotos, setAlbumPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const getAlbumInfo = async () => {
      const data = await fetchAlbum(albumId)
      setAlbum(data)
    }
    getAlbumInfo()

    const getUserAlbums = async () => {
      if (albumId) {
        const data = await filterAlbumPhotos(albumId)
        setAlbumPhotos(data)
      }
    }
    getUserAlbums()

    return () => {}
  }, [])

  if (!albumInfo && albumPhotos)
    return (
      <div className="pageCenter">
        <Loader />
      </div>
    )

  return (
    <div className="pageMargin mt-20 sm:mt-16">
      <section className="flex flex-row text-left items-center justify-center mt-20">
        <button
          className="button largeScreenBtnPosition"
          onClick={() => navigate(-1)}
        >
          Go Back{' '}
        </button>
        <div className="text-xl ">Album Details</div>
      </section>
      <section>
        <AlbumInfo albumInfo={albumInfo} />
        <div className="h-[75vh] max-h-screen  overflow-y-auto">
          <PhotoAlbumList
            userId={Number(userId)}
            albumId={Number(albumId)}
            albumPhotos={albumPhotos}
          />
        </div>
      </section>
    </div>
  )
}

export default AlbumPage
