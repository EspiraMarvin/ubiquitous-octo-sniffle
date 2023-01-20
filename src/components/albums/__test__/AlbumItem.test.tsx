import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AlbumItem from '../AlbumItem'
import { BrowserRouter } from 'react-router-dom'

const MockAlbumItem = () => {
  return (
    <BrowserRouter>
      <AlbumItem
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
        album={{ userId: 1, id: 1, title: 'This is my album title' }}
      />
    </BrowserRouter>
  )
}

describe('<AlbumItem />', () => {
  beforeEach(async () => {
    render(<MockAlbumItem />)
  })

  it('should have Album details title', async () => {
    const AlbumDetailsTitle = screen.getByText(/This is my album title/i)
    expect(AlbumDetailsTitle).toBeInTheDocument()
  })

  it('should have the href  link back to the user details ', async () => {
    expect(screen.getByRole('link').hasAttribute('href'))
  })
})
