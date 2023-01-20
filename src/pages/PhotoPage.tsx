import { useParams, useNavigate } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import PhotoAlbumDetails from '../components/photos/PhotoAlbumDetails'

function PhotoPage() {
  useTitle('Album Photo Details')
  const navigate = useNavigate()

  return (
    <div className="pageMargin mt-20 sm:mt-16 ">
      <section className="flex flex-row items-center justify-center mb-8 text-left">
        <button
          className="button largeScreenBtnPosition"
          onClick={() => navigate(-1)}
        >
          Go Back{' '}
        </button>
        <div className="mt-4 text-xl text-center">Album Photo Details</div>
      </section>
      {/* PhotoAlbumDetails */}
      <section className="flex items-center justify-center">
        <PhotoAlbumDetails />
      </section>
    </div>
  )
}

export default PhotoPage
