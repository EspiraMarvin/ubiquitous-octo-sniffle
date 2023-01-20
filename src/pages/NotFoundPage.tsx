import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <section className="text-xl lg:text-3xl font-bold">404 Not Found</section>
      <button className="button w-32 mt-4" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  )
}

export default NotFoundPage
