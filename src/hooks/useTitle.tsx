import { useEffect } from 'react'

// document title hook
const useTitle = (title: string) => {
  useEffect(() => {
    ;(async () => {
      const prevTitle = document.title
      document.title = title
      return () => (document.title = prevTitle)
    })()
  }, [title])
}

export default useTitle
