import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { createContext } from 'react'
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
} from 'firebase/auth'
import toast from 'react-hot-toast'
import { auth } from '../lib/firebase'
import Loader from '../components/ui/Loader'

interface IAuth {
  user: User | null
  signInWithGoogle: () => Promise<any>
  logOut: () => Promise<void>
  error: string | null
  loading: boolean
}

export const AuthContext = createContext<IAuth>({
  user: null,
  signInWithGoogle: async () => {},
  logOut: async () => {},
  error: null,
  loading: false,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState(null)
  const [initialLoading, setInitialLoading] = useState(true)
  const navigate = useNavigate()

  // persisting the loggedin user if authenticated and if there's no user redirect back to landing page
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // authenticated
        setUser(user)
        setLoading(false)
        let authToken = sessionStorage.getItem('AuthToken')
        if (!authToken) {
          sessionStorage.setItem('AuthToken', user.refreshToken)
        }
      } else {
        // Not authenticated
        setUser(null)
        setLoading(false)
        sessionStorage.removeItem('AuthToken')
        navigate('/')
      }
      setInitialLoading(false)
    })
  }, [])

  // sign in with google
  const signInWithGoogle = async () => {
    setLoading(true)
    const provider = new GoogleAuthProvider()

    try {
      const result = await signInWithPopup(auth, provider)
      const { displayName, email, photoURL, uid, refreshToken } = result.user
      navigate('/users')
      sessionStorage.setItem('AuthToken', refreshToken)
      setLoading(false)
      toast.success(`Success`)
      return email
    } catch (error) {
      toast(`${(error as Error).message}`)
      setLoading(false)
    }
  }

  // logout fn
  const logOut = async () => {
    setLoading(true)
    sessionStorage.removeItem('AuthToken')
    await signOut(auth)
      .then(() => {
        setUser(null)
      })
      .catch((error) => toast(`${(error as Error).message}`))
      .finally(() => setLoading(false))
  }

  // memoized context values to prevent re-renders
  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      signInWithGoogle,
      logOut,
    }),
    [user, loading, signInWithGoogle, logOut]
  )

  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
      {initialLoading && (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      )}
    </AuthContext.Provider>
  )
}
