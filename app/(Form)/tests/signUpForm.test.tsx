import '@jest/globals'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import SignUpForm from '../signUpForm'

const mockSetRegisteredUsers = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Sign Up Form', () => {
  test('Check if the Login now button works as it should', async () => {
    const user = userEvent.setup()
    const mockSetIsRegister = jest.fn()
    render(
      <SignUpForm
        isRegister={true}
        setIsRegister={mockSetIsRegister}
        registeredUsers={[]}
        setRegisteredUsers={mockSetRegisteredUsers()}
      />
    )
    const btnRegister = screen.getByText('Login now')
    await user.click(btnRegister)
    await expect(mockSetIsRegister).toHaveBeenCalled()
  })
})
