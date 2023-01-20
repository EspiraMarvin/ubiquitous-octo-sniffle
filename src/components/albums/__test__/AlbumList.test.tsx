import { render, screen } from '@testing-library/react'
import AlbumList from '../AlbumList'
import { BrowserRouter } from 'react-router-dom'

const MockAlbumList = () => {
  return (
    <BrowserRouter>
      <AlbumList
        user={{
          name: 'Ervin Howel',
          albumCount: '10',
          id: '1',
          username: 'Ervin',
          email: 'Ervin@gmail.com',
          address: {
            street: 'nai',
            suite: 'sur3',
            city: 'mbs',
            zipcode: '234sd',
          },
          phone: '2343525345',
          website: 'facebook.com',
          geo: { lat: '234232', lng: '93234' },
          company: {
            name: 'company 1',
            catchPhrase: 'kompany 1',
            bs: 'bss',
          },
        }}
      />
    </BrowserRouter>
  )
}

describe('<AlbumItem />', () => {
  beforeEach(async () => {
    render(<MockAlbumList />)
  })

  it('should have Albums List title', async () => {
    const AlbumDetailsTitle = screen.getByText(/Albums List/i)
    expect(AlbumDetailsTitle).toBeInTheDocument()
  })
})
