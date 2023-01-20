import { render, screen } from '@testing-library/react'
import PhotoAlbumDetails from '../PhotoAlbumDetails'
import { BrowserRouter } from 'react-router-dom'
import AppProvider from '../../../context/AppContext'

const MockPhotoAlbumDetails = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <PhotoAlbumDetails />
      </AppProvider>
    </BrowserRouter>
  )
}
describe('<PhotoDetails />', () => {
  it('should have edit title button', async () => {
    render(<MockPhotoAlbumDetails />)
    const PhotoDetailsTitle = await screen.findByRole('button', {
      name: 'Edit Title',
    })
    expect(PhotoDetailsTitle).toBeInTheDocument()
  })
})
