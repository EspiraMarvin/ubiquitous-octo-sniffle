import useTitle from '../hooks/useTitle'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/ui/Loader'

function HomePage() {
  useTitle('Home')
  const { loading, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  let authToken = sessionStorage.getItem('AuthToken')
  // if (authToken) {
  //   navigate(-1)
  // }
  // if (authToken)
  //   return (
  //     <div className="pageCenter">
  //       <Loader />
  //     </div>
  //   )
  return (
    <div className="h-screen pt-10 pageMargin md:pt-20 lg:pt-44">
      <div className="p-10 text-lg font-bold text-center md:text-2xl">
        SIL Frontend
      </div>
      <div className="flex flex-col">
        <div className="text-center mb-2 text-lg">
          SIL FRONTEND, gives you access to users 'artistes' and a collection of
          all their albums including photos.
        </div>
        <span className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          velit? Soluta atque perferendis, neque, iusto accusantium laudantium
          alias ducimus iste dolorum tenetur nihil illum culpa ipsa, deserunt
          veniam perspiciatis? Accusantium, nihil consectetur commodi blanditiis
          alias sapiente nostrum minima itaque magnam recusandae minus saepe
          aperiam rem fugit deleniti impedit amet corrupti.
        </span>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button
          className="w-56 button"
          disabled={loading}
          onClick={signInWithGoogle}
          data-testid="login-btn"
        >
          <span data-testid="login-label">
            {loading ? 'Loading ....' : 'Continue with Google'}
          </span>
        </button>
      </div>
    </div>
  )
}

export default HomePage
