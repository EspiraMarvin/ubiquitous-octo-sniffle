import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
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
    const pageInformation = screen.getAllByText(/SIL Frontend/i)
    expect(pageInformation).toBeTruthy()
  })
})
