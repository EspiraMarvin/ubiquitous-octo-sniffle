import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import App from './App'

const MockApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

describe('<App />', () => {
  it('should render the correct page on initial app launch', async () => {
    render(<MockApp />)
    // SIL Frontend
    const pageInformation = screen.getAllByText(/MARINSZFASFZDO;/i)
    expect(pageInformation).toBeTruthy()
  })
})
