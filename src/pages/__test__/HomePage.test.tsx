import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../HomePage'

const handleClick = jest.fn()

const MockHomePage = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  )
}

describe('<HomePage/>', () => {
  beforeEach(() => {
    render(<MockHomePage />)
  })

  it('should have the correct document title', async () => {
    await waitFor(() => expect(document.title).toEqual('Home'))
  })

  it('should have the app correct description as SIL Frontend', () => {
    const titleElement = screen.getByText(
      /Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, velit?/i
    )
    expect(titleElement).toBeInTheDocument()
  })

  it('should have the continue with google button', () => {
    const buttonEl = screen.getByRole('button', {
      name: 'Continue with Google',
    })
    expect(buttonEl).toBeInTheDocument()
  })
})
