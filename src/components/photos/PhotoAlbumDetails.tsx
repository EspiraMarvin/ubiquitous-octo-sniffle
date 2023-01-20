import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Photo } from '../../interfaces/typings'
import usePhoto from '../../hooks/usePhoto'

function PhotoDetails() {
  let { photoId } = useParams()
  const { updateTitle, findPhoto, loading } = usePhoto()
  const [photoInfo, setPhotoInfo] = useState<Photo>()
  const [title, setTitle] = useState<string>('')
  const [edit, setEdit] = useState<boolean>(false)

  const btnSave = async () => {
    if (edit && title.trim().length > 0 && photoInfo) {
      let payload = {
        id: Number(photoInfo.id),
        albumId: Number(photoInfo?.albumId),
        title: title,
        url: photoInfo?.url,
        thumbnailUrl: photoInfo?.thumbnailUrl,
      }
      await updateTitle(payload).then(({ photoDetails }) => {
        setPhotoInfo(photoDetails)
        setTitle(photoDetails.title)
        setEdit((prev) => !prev)
      })
    } else {
      setEdit((prev) => !prev)
    }
  }

  // fetch photo album details on mount
  useEffect(() => {
    const photoInfo = async () => {
      if (photoId) {
        const data = await findPhoto(photoId)
        setPhotoInfo(data)
      }
    }
    photoInfo()

    return () => {}
  }, [])

  // update title field on edit true
  useEffect(() => {
    if (edit && photoInfo) {
      setTitle(photoInfo?.title)
    }
  }, [edit])

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <LazyLoadImage
          className="w-64 h-64 rounded-md contain"
          src={photoInfo?.thumbnailUrl}
          placeholder={
            <div className="w-28 h-28 text-white bg-gray-200 rounded-xl"> </div>
          }
          alt=""
        />
      </div>
      <div className="mt-3 ml-3">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-row space-x-2 item-center">
            <div className="">{!edit && photoInfo?.title}</div>
          </div>
          {edit && (
            <label htmlFor="title" className="font-light">
              Title:
              <input
                className="w-full h-12 px-2 border-2 border-black resize"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Photo title"
              />
            </label>
          )}
        </form>
        <div className="flex justify-center gap-x-2">
          {edit && !loading && (
            <button
              className="mt-3 cursor-pointer button w-28"
              onClick={() => setEdit((prev) => !prev)}
            >
              Cancel
            </button>
          )}

          {!loading && (
            <button
              className="mt-3 cursor-pointer button w-28"
              onClick={btnSave}
              disabled={loading}
            >
              {!edit ? 'Edit Title' : 'Save Title'}
            </button>
          )}

          {loading && (
            <button
              className="mt-3 cursor-pointer button w-28"
              onClick={btnSave}
            >
              Updating
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PhotoDetails
