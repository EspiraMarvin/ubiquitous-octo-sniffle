import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PhotoPage from '../PhotoPage'

const MockPhotoPage = () => {
  return (
    <BrowserRouter>
      <PhotoPage />
    </BrowserRouter>
  )
}
describe('Photo Page', () => {
  beforeEach(async () => {
    render(<MockPhotoPage />)
  })

  it('should have the correct document title', async () => {
    await waitFor(() => expect(document.title).toEqual('Photo Album Details'))
  })

  it('should render correct page title', async () => {
    const PhotoDetailsTitle = screen.getByText(/Photo Album Details/i)
    expect(PhotoDetailsTitle).toBeInTheDocument()
  })
})
