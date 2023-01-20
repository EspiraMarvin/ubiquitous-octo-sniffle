interface LoaderProps {
  width?: string
  height?: string
  color?: string
}

function Loader({ color = 'blue' }: LoaderProps) {
  return (
    <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-r-2 border-[#0EA5E9]" />
  )
}

export default Loader
