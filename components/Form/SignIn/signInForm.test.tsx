import '@jest/globals'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

const mockSetIsRegister = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Sign In Form', () => {
  test('Check if the register now button works as it should', async () => {
    const user = userEvent.setup()

    render(<SignInForm isRegister={false} setIsRegister={mockSetIsRegister} />)
    const btnRegister = screen.getByText('Register now')
    await user.click(btnRegister)
    await expect(mockSetIsRegister).toHaveBeenCalled()
  })
})
