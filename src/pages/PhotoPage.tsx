import { useNavigate } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import PhotoAlbumDetails from '../components/photos/PhotoAlbumDetails'

function PhotoPage() {
  useTitle('Photo Album Details')
  const navigate = useNavigate()

  return (
    <div className="pt-20 pageMargin sm:pt-16">
      <section className="flex flex-row items-center justify-center mb-8 text-left">
        <button
          className="button largeScreenBtnPosition"
          onClick={() => navigate(-1)}
        >
          Go Back{' '}
        </button>
        <div className="mt-4 text-xl text-center"> Photo Album Details</div>
      </section>
      <section className="flex items-center justify-center">
        <PhotoAlbumDetails />
      </section>
    </div>
  )
}

export default PhotoPage
