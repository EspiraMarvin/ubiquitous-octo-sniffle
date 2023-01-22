import { useContext } from 'react'
import { PhotoContext } from '../context/PhotoContext'

// photos reusable hook
export default function usePhoto() {
  return useContext(PhotoContext)
}
