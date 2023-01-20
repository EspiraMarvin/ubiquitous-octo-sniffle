import { render, screen } from '@testing-library/react'
import PhotoAlbumList from '../PhotoAlbumList'
import { BrowserRouter } from 'react-router-dom'

const MockAPhotoAlbumList = () => {
  return (
    <BrowserRouter>
      <PhotoAlbumList
        albumPhotos={[
          {
            albumId: 1,
            id: 1,
            title: 'accusamus beatae ad facilis cum similique qui sunt',
            url: 'https://via.placeholder.com/600/92c952',
            thumbnailUrl: 'https://via.placeholder.com/150/92c952',
          },
          {
            albumId: 2,
            id: 2,
            title: 'reprehenderit est deserunt velit ipsam',
            url: 'https://via.placeholder.com/600/771796',
            thumbnailUrl: 'https://via.placeholder.com/150/771796',
          },
        ]}
        userId={1}
        albumId={1}
      />
    </BrowserRouter>
  )
}

describe('<PhotoAlbumList />', () => {
  beforeEach(async () => {
    render(<MockAPhotoAlbumList />)
  })

  it('should render multiple photo albums in a list', async () => {
    const photoAlbumElements = await screen.findAllByTestId(/photo-album/i)
    expect(photoAlbumElements.length).toBe(2)
  })
})
