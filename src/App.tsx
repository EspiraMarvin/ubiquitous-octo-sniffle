import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/ui/NavBar'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import UserPage from './pages/UserPage'
import AlbumPage from './pages/AlbumPage'
import PhotoPage from './pages/PhotoPage'
import NotFoundPage from './pages/NotFoundPage'
import * as Sentry from '@sentry/react'

function App() {
  const navigate = useNavigate()
  const [token, setToken] = useState<string | null>(null)
  useEffect(() => {
    let authToken = sessionStorage.getItem('AuthToken')
    setToken(authToken)
    if (!authToken) {
      navigate('/')
    }
  }, [])

  return (
    <div className="h-screen">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:userId" element={<UserPage />} />
          <Route
            path="/users/:userId/albums/:albumId"
            element={<AlbumPage />}
          />
          <Route
            path="/users/:userId/albums/:albumId/photos/:photoId"
            element={<PhotoPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default Sentry.withProfiler(App)
