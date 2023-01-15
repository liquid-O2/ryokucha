import { render, screen } from './testUtils'
import { describe, it, vi, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

import AddToCart from '../app/products/[slug]/addToCart'
import React from 'react'
import { GlobalContext } from '../components/contextProvider'

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

vi.mock('next/navigation', () => ({
  useRouter: vi.fn().mockImplementation(() => ({ push: vi.fn() })),
}))

describe('Add to Cart', () => {
  it('should call the dispatch with the given data with addItem type', async () => {
    const dispatch = vi.fn()
    const mockData = {
      image: { asset: { url: '', metadata: { lqip: '' } } },
      name: 'Item One',
      price: 99,
      slug: 'item-one',
    }
    const user = userEvent.setup()
    render(
      <GlobalContext.Provider
        value={{
          signIn: () => undefined,
          signUp: () => undefined,
          logout: () => undefined,
          isLoggedIn: true,
          updateUser: () => undefined,
          cartDetails: [{}],
          signUpWithGoogle: () => undefined,
          dispatch,
          userDetails: { uid: '', likedTeas: [], photoUrl: '', email: '' },
        }}>
        <AddToCart name={mockData.name} slug={mockData.slug} image={mockData.image} price={mockData.price} />
      </GlobalContext.Provider>
    )

    const button = screen.getByRole('button', { name: 'ADD TO CART' })
    await user.click(button)

    expect(dispatch).toHaveBeenCalledWith({
      type: 'addItem',
      name: mockData.name,
      slug: mockData.slug,
      image: mockData.image,
      price: mockData.price,
      quantity: 1,
    })
  }),
    it('should call the dispatch with the given data with updateQuantity type', async () => {
      const mockData = {
        image: { asset: { url: '', metadata: { lqip: '' } } },
        name: 'Item One',
        price: 99,
        slug: 'item-one',
      }
      const dispatch = vi.fn()
      const user = userEvent.setup()
      render(
        <GlobalContext.Provider
          value={{
            signIn: () => undefined,
            signUp: () => undefined,
            logout: () => undefined,
            isLoggedIn: true,
            updateUser: () => undefined,
            cartDetails: [{ slug: 'item-one' }],
            signUpWithGoogle: () => undefined,
            dispatch,
            userDetails: { uid: '', likedTeas: [], photoUrl: '', email: '' },
          }}>
          <AddToCart name={mockData.name} slug={mockData.slug} image={mockData.image} price={mockData.price} />
        </GlobalContext.Provider>
      )

      const button = screen.getByRole('button', { name: 'ADD TO CART' })
      await user.click(button)

      expect(dispatch).toHaveBeenCalledWith({ type: 'updateQuantity', slug: mockData.slug, quantity: 1 })
    }),
    it('should call the dispatch with the given data with addItem type and quantity of 3 and 2', async () => {
      const dispatch = vi.fn()
      const mockData = {
        image: { asset: { url: '', metadata: { lqip: '' } } },
        name: 'Item One',
        price: 99,
        slug: 'item-one',
      }
      const user = userEvent.setup()
      render(
        <GlobalContext.Provider
          value={{
            signIn: () => undefined,
            signUp: () => undefined,
            logout: () => undefined,
            isLoggedIn: true,
            updateUser: () => undefined,
            cartDetails: [{}],
            signUpWithGoogle: () => undefined,
            dispatch,
            userDetails: { uid: '', likedTeas: [], photoUrl: '', email: '' },
          }}>
          <AddToCart name={mockData.name} slug={mockData.slug} image={mockData.image} price={mockData.price} />
        </GlobalContext.Provider>
      )

      const incrementButton = screen.getByRole('button', { name: 'increment' })
      const decrementButton = screen.getByRole('button', { name: 'decrement' })
      const addToCartButton = screen.getByRole('button', { name: 'ADD TO CART' })
      await user.click(incrementButton)
      await user.click(incrementButton)
      await user.click(addToCartButton)

      expect(dispatch).toHaveBeenCalledWith({
        type: 'addItem',
        name: mockData.name,
        slug: mockData.slug,
        image: mockData.image,
        price: mockData.price,
        quantity: 3,
      })

      await user.click(decrementButton)
      await user.click(addToCartButton)

      expect(dispatch).toHaveBeenCalledWith({
        type: 'addItem',
        name: mockData.name,
        slug: mockData.slug,
        image: mockData.image,
        price: mockData.price,
        quantity: 2,
      })
    })
})
