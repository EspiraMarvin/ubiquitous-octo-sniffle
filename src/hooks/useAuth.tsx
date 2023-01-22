import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

// authentication reusable hook
export default function useAuth() {
  return useContext(AuthContext)
}
