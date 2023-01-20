import { render, screen, fireEvent } from '@testing-library/react'
import AlbumDetails from '../AlbumDetails'
import { BrowserRouter } from 'react-router-dom'

const MockAlbumDetails = () => {
  return (
    <BrowserRouter>
      <AlbumDetails
        albumInfo={{ userId: 1, id: 1, title: 'This is my title' }}
      />
    </BrowserRouter>
  )
}

describe('<AlbumDetails />', () => {
  it('should have Album details title', async () => {
    render(<MockAlbumDetails />)
    const AlbumDetailsTitle = screen.getByText(/This is my title/i)
    expect(AlbumDetailsTitle).toBeInTheDocument()
  })
})
