import '@jest/globals'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import SignInForm from './signInForm'

const mockSetRegisteredUsers = jest.fn()
const mockSetIsRegister = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Sign In Form', () => {
  test('Check if the register now button works as it should', async () => {
    const user = userEvent.setup()

    render(
      <SignInForm
        isRegister={false}
        setIsRegister={mockSetIsRegister}
        registeredUsers={[]}
        setRegisteredUsers={mockSetRegisteredUsers()}
      />
    )
    const btnRegister = screen.getByText('Register now')
    await user.click(btnRegister)
    await expect(mockSetIsRegister).toHaveBeenCalled()
  })
})
