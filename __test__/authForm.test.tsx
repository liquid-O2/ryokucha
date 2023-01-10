import { render, screen } from './testUtils'
import { describe, it, test, vi, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

import AuthForm from '../components/authForm'
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

const signIn = vi.fn()
const signUp = vi.fn()
const signUpWithGoogle = vi.fn()

describe('Sign In Process', () => {
  const user = userEvent.setup()
  it('signIn function to be called', async () => {
    render(
      <GlobalContext.Provider
        value={{
          signIn: signIn(),
          signUp: () => undefined,
          logout: () => undefined,
          isLoggedIn: true,
          updateUser: () => undefined,
          cartDetails: [{}],
          signUpWithGoogle: () => undefined,
          dispatch: () => undefined,
          userDetails: { uid: '', likedTeas: [], photoUrl: '', email: '' },
        }}
      >
        <AuthForm />
      </GlobalContext.Provider>
    )
    const emailField = screen.getByPlaceholderText('Enter your email')
    const passField = screen.getByPlaceholderText('Enter your password')
    const submitBtn = screen.getByRole('button', { name: 'Login' })

    await user.type(emailField, 'test@teast.com')
    await user.type(passField, 'test12a34')
    user.click(submitBtn)

    await expect(signIn).toHaveBeenCalled()
  }),
    it('signUp function to be called', async () => {
      render(
        <GlobalContext.Provider
          value={{
            signIn: () => undefined,
            signUp: signUp(),
            logout: () => undefined,
            isLoggedIn: true,
            updateUser: () => undefined,
            cartDetails: [{}],
            signUpWithGoogle: () => undefined,
            dispatch: () => undefined,
            userDetails: { uid: '', likedTeas: [], photoUrl: '', email: '' },
          }}
        >
          <AuthForm />
        </GlobalContext.Provider>
      )
      const emailField = screen.getByPlaceholderText('Enter your email')
      const passField = screen.getByPlaceholderText('Enter your password')
      const registerBtn = screen.getByText('Register now')

      user.click(registerBtn)
      await user.type(emailField, 'test@teast.com')
      await user.type(passField, 'test12a34')
      const submitBtn = screen.getByRole('button', { name: 'Sign Up' })
      user.click(submitBtn)

      await expect(signUp).toHaveBeenCalled()
    }),
    it('signUpWithGoogle function to be called', async () => {
      render(
        <GlobalContext.Provider
          value={{
            signIn: () => undefined,
            signUp: () => undefined,
            logout: () => undefined,
            isLoggedIn: true,
            updateUser: () => undefined,
            cartDetails: [{}],
            signUpWithGoogle: signUpWithGoogle(),
            dispatch: () => undefined,
            userDetails: { uid: '', likedTeas: [], photoUrl: '', email: '' },
          }}
        >
          <AuthForm />
        </GlobalContext.Provider>
      )
      const googleBtn = screen.getByText('Sign in with Google')

      user.click(googleBtn)
     

      await expect(signUpWithGoogle).toHaveBeenCalled()
    })
})
