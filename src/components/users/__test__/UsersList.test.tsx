import { render, screen, fireEvent } from '@testing-library/react'
import UsersList from '../UsersList'
import { BrowserRouter } from 'react-router-dom'

const MockUserListItem = () => {
  return (
    <BrowserRouter>
      <UsersList
        users={[
          {
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
          },
          {
            name: 'Leanne Graham',
            albumCount: '10',
            id: '2',
            username: 'Leanne',
            email: 'Leanne@gmail.com',
            address: {
              street: 'mbs',
              suite: 'sur3',
              city: 'nkr',
              zipcode: '2344534dds',
            },
            phone: '2343525345',
            website: 'google.com',
            geo: { lat: '2342', lng: '934' },
            company: {
              name: 'company 2',
              catchPhrase: 'kompany 2',
              bs: 'bssb',
            },
          },
        ]}
      />
    </BrowserRouter>
  )
}

describe('<UsersList/>', () => {
  beforeEach(() => {
    render(<MockUserListItem />)
  })

  it('should render multiple users in a list', async () => {
    const userDivElements = await screen.findAllByTestId(/user-item/i)
    expect(userDivElements.length).toBe(2)
  })
})
