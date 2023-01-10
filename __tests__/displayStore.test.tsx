import '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import DisplayStore from '../app/shop/displayStore'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({ push: jest.fn(), prefetch: jest.fn() })),
}))

describe('Search', () => {
  const teas = [
    {
      name: 'Alpha',
      image: { asset: { url: '', metadata: { lqip: '' } } },
      slug: { current: '' },
      price: 9,
      attributes: ['w'],
    },
    {
      name: 'Beta',
      image: { asset: { url: '', metadata: { lqip: '' } } },
      slug: { current: '' },
      price: 100,
      attributes: ['a'],
    },
    {
      name: 'Gamma',
      image: { asset: { url: '', metadata: { lqip: '' } } },
      slug: { current: '' },
      price: 20,
      attributes: ['c'],
    },
  ]

  const user = userEvent.setup()
  test('Check if search works', async () => {
    render(<DisplayStore fetchedTeas={teas} />)
    const searchField = screen.getByPlaceholderText('Search for your favourite tea')

    await user.type(searchField, 'bet')

    const searchFound = await screen.findByText('Beta')
    const gamma = await screen.findByText('Gamma')

    await expect(searchFound).toBeInTheDocument()
    await expect(gamma).not.toBeInTheDocument()
  })
})
