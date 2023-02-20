import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router'

export default function NavBar(): any {
  let authToken = sessionStorage.getItem('AuthToken')
  const { loading, user, logOut } = useAuth()
  const navigate = useNavigate()
  let { pathname } = useLocation()
  const unprotectedRoutes = ['/']
  const [navbar, setNavbar] = useState(false)

  return (
    user &&
    authToken &&
    !unprotectedRoutes.includes(pathname) && (
      <nav className="fixed top-0 z-10 w-full h-16 px-2 py-1 bg-black shadow md:py-2 md:h-14 md:px-5">
        <div className="items-center px-4 mx-auto justify-evenly md:justify-between md:flex md:px-8 lg:max-w-7xl">
          <div>
            <div className="flex items-center py-2 justify-evenly md:justify-between md:py-2">
              {pathname !== '/users' && (
                <button
                  className="absolute button h-7 left-2 top-3 md:hidden"
                  onClick={() => navigate(-1)}
                >
                  Back{' '}
                </button>
              )}
              <div className="mt-1 text-center text-white">SIL FRONTEND</div>

              <div className="md:hidden">
                <button
                  className="absolute p-3 rounded-md outline-none focus:border focus:border-gray-400 right-3 top-2"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <div className="flex flex-col mt-1 items md:hidden">
                <div
                  className="inline-block w-full px-4 py-4 text-center text-white bg-black rounded-md shadow cursor-pointer hover:bg-gray-100"
                  onClick={logOut}
                >
                  Sign Out
                </div>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:flex md:items-center md:gap-x-8">
            <div className="flex items-center justify-center p-1 uppercase bg-indigo-200 border-2 border-indigo-500 rounded-full cursor-pointer ">
              {user?.email && (
                <div className="flex items-center justify-center text-xl rounded-full h-7 w-7">
                  {user?.email.slice(0, 1)}
                </div>
              )}
            </div>
            <div
              className="flex items-center p-1 transition-all cursor-pointer text-white/70 hover:text-white"
              onClick={logOut}
            >
              {loading ? 'Loading..' : 'LogOut'}
            </div>
          </div>
        </div>
      </nav>
    )
  )
}
