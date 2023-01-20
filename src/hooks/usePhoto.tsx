import { useContext } from 'react'
import { PhotoContext } from '../context/PhotoContext'

export default function usePhoto() {
  return useContext(PhotoContext)
}
