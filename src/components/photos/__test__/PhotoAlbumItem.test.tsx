import { render, screen } from '@testing-library/react'
import PhotoAlbumItem from '../PhotoAlbumItem'
import { BrowserRouter } from 'react-router-dom'

const MockAlbumPhotoItem = () => {
  return (
    <BrowserRouter>
      <PhotoAlbumItem
        photo={{
          albumId: 1,
          id: 1,
          title: 'lorem ipsum',
          url: 'https://via.placeholder.com/600/92c952',
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        }}
      />
    </BrowserRouter>
  )
}

describe('<PhotoAlbumItem />', () => {
  beforeEach(async () => {
    render(<MockAlbumPhotoItem />)
  })

  it('should have Album Photo title as lorem ipsum', async () => {
    const AlbumDetailsTitle = screen.getByText(/lorem ipsum/i)
    expect(AlbumDetailsTitle).toHaveTextContent('lorem ipsum')
  })

  it('should have image with alt for accessibility', async () => {
    const AlbumDetailsTitle = screen.getByAltText(/lorem ipsum/i)
    expect(AlbumDetailsTitle).toBeInTheDocument()
  })

  it('alt contains correct value', async () => {
    const albumPhoto = document.querySelector('img') as HTMLImageElement
    expect(albumPhoto.alt).toContain('lorem ipsum')
  })

  test('photo image src contains correct value', () => {
    const albumPhoto = document.querySelector('img') as HTMLImageElement
    expect(albumPhoto.src).toContain('https://via.placeholder.com/150/92c952')
  })
})
