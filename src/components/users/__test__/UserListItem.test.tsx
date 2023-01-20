import { render, screen, fireEvent } from '@testing-library/react'
import UserListItem from '../UserListItem'

import { BrowserRouter } from 'react-router-dom'

let data = {
  name: 'Leanne Graham',
  albumCount: 10,
  userId: 1,
  id: 1,
  title: 'madsoi sdsd',
}
const MockUserListItem = () => {
  return (
    <BrowserRouter>
      <UserListItem user={data} />
    </BrowserRouter>
  )
}

describe('<UserListItem/>', () => {
  beforeEach(() => {
    render(<MockUserListItem />)
  })

  it('should render one user item', () => {
    const userDivElement = screen.queryByTestId('user-item-1')
    expect(userDivElement).toBeInTheDocument()
  })

  it('should render user name', async () => {
    const userName = screen.getByText(/Leanne Graham/i)
    expect(userName).toBeInTheDocument()
  })

  it('should render user album count', async () => {
    const userAlbumCount = await screen.getByText(/10/i)
    expect(userAlbumCount).toHaveTextContent('10')
  })

  it('should return 1 as length of users', async () => {
    const userDivElements = await screen.getAllByTestId(/user-item/i)
    expect(userDivElements.length).toBe(1)
  })
})
