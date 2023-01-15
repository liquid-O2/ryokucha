import { render, screen } from './testUtils'
import { describe, it, test, vi, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

import AuthForm, { Inputs } from '../components/authForm'
import React from 'react'
import { GlobalContext } from '../components/contextProvider'
import { UseFormSetError } from 'react-hook-form'

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

describe('Sign In Process', () => {
  const user = userEvent.setup()
  const signIn = vi.fn()
  it('signIn function to be called', async () => {
    render(
      <GlobalContext.Provider
        value={{
          signIn,
          signUp: () => undefined,
          logout: () => undefined,
          isLoggedIn: true,
          updateUser: () => undefined,
          cartDetails: [{}],
          signUpWithGoogle: () => undefined,
          dispatch: () => undefined,
          userDetails: { uid: '', likedTeas: [], photoUrl: '', email: '' },
        }}>
        <AuthForm />
      </GlobalContext.Provider>
    )

    const emailField = screen.getByPlaceholderText('Enter your email')
    const passField = screen.getByPlaceholderText('Enter your password')
    const submitBtn = screen.getByRole('button', { name: 'Login' })

    function setError() {}
    function resetField() {}
    await user.type(emailField, 'test@teast.com')
    await user.type(passField, 'test12a34')
    await user.click(submitBtn)
    expect(signIn).toHaveBeenCalled()
    // expect(signIn).toHaveBeenCalledWith('test@teast.com', 'test12a34', setError, resetField)
  }),
    it('signUp function to be called', async () => {
      const signUp = vi.fn()
      render(
        <GlobalContext.Provider
          value={{
            signIn: () => undefined,
            signUp,
            logout: () => undefined,
            isLoggedIn: true,
            updateUser: () => undefined,
            cartDetails: [{}],
            signUpWithGoogle: () => undefined,
            dispatch: () => undefined,
            userDetails: { uid: '', likedTeas: [], photoUrl: '', email: '' },
          }}>
          <AuthForm />
        </GlobalContext.Provider>
      )
      const emailField = screen.getByPlaceholderText('Enter your email')
      const passField = screen.getByPlaceholderText('Enter your password')
      const registerBtn = screen.getByText('Register now')

      await user.click(registerBtn)
      await user.type(emailField, 'test@teast.com')
      await user.type(passField, 'test12a34')
      const submitBtn = screen.getByRole('button', { name: 'Sign Up' })
      await user.click(submitBtn)

      expect(signUp).toHaveBeenCalled()
    }),
    it('signUpWithGoogle function to be called', async () => {
      const signUpWithGoogle = vi.fn()
      render(
        <GlobalContext.Provider
          value={{
            signIn: () => undefined,
            signUp: () => undefined,
            logout: () => undefined,
            isLoggedIn: true,
            updateUser: () => undefined,
            cartDetails: [{}],
            signUpWithGoogle,
            dispatch: () => undefined,
            userDetails: { uid: '', likedTeas: [], photoUrl: '', email: '' },
          }}>
          <AuthForm />
        </GlobalContext.Provider>
      )
      const googleBtn = screen.getByText('Sign in with Google')

      await user.click(googleBtn)

      expect(signUpWithGoogle).toHaveBeenCalled()
    })
})
