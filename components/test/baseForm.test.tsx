import '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import AuthForm from '../authForm'

const mockSetIsRegister = jest.fn()
const mockSetRegisteredUsers = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({ push: jest.fn() })),
}))

describe('Sign In Process', () => {
  const user = userEvent.setup()
  test('Check if errors get displayed if an user enters the wrong login information', async () => {
    render(<AuthForm isRegister={false} setIsRegister={mockSetIsRegister} />)
    const emailField = screen.getByPlaceholderText('Enter your email')
    const passField = screen.getByPlaceholderText('Enter your password')
    const submitBtn = screen.getByText('Login')

    await user.type(emailField, 'test@teast.com')
    await user.type(passField, 'test12a34')
    user.click(submitBtn)

    const passErr = await screen.findByText('Incorrect password', {
      exact: false,
    })
    const emailErr = await screen.findByText('Incorrect email address', {
      exact: false,
    })

    await expect(emailErr).toBeInTheDocument()
    await expect(passErr).toBeInTheDocument()
  })

  test('Check if the login method works as it should and display no errors when correct information has been entered', async () => {
    render(<AuthForm isRegister={false} setIsRegister={mockSetIsRegister} />)
    const emailField = screen.getByPlaceholderText('Enter your email')
    const passField = screen.getByPlaceholderText('Enter your password')
    const submitBtn = screen.getByText('Login')

    await user.type(emailField, 'test@test.com')
    await user.type(passField, 'test1234')
    user.click(submitBtn)

    const passErr = await screen.queryByText('Incorrect password', {
      exact: false,
    })
    const emailErr = await screen.queryByText('Incorrect email address', {
      exact: false,
    })

    await expect(emailErr).toBeNull()
    await expect(passErr).toBeNull()
  })
})

describe('Sign Up Process', () => {
  const user = userEvent.setup()
  test('Check if errors get displayed if an user enters a password less than 8 characters', async () => {
    render(<AuthForm isRegister={true} setIsRegister={mockSetIsRegister} />)
    const emailField = screen.getByPlaceholderText('Enter your email')
    const passField = screen.getByPlaceholderText('Enter your password')
    const submitBtn = screen.getByText('Sign Up')

    await user.type(emailField, 'test@teast.com')
    await user.type(passField, 'test')
    user.click(submitBtn)

    const passErr = await screen.findByText('Password must be more than 8 characters', { exact: false })

    await expect(passErr).toBeInTheDocument()
  })

  test('Check if errors get displayed if an user enters an invalid email format', async () => {
    render(<AuthForm isRegister={true} setIsRegister={mockSetIsRegister} />)
    const emailField = screen.getByPlaceholderText('Enter your email')
    const passField = screen.getByPlaceholderText('Enter your password')
    const submitBtn = screen.getByText('Sign Up')

    await user.type(emailField, 'test@a.c')
    await user.type(passField, 'test1234')
    user.click(submitBtn)

    const emailErr = await screen.findByText('Invalid email format', {
      exact: false,
    })

    await expect(emailErr).toBeInTheDocument()
  })

  test('Check if the sign up button works as it is expected to', async () => {
    render(<AuthForm isRegister={true} setIsRegister={mockSetIsRegister} />)
    const emailField = screen.getByPlaceholderText('Enter your email')
    const passField = screen.getByPlaceholderText('Enter your password')
    const submitBtn = screen.getByText('Sign Up')

    await user.type(emailField, 'test@test.com')
    await user.type(passField, 'test1234')

    user.click(submitBtn)

    await expect(mockSetRegisteredUsers).toHaveBeenCalled()
  })
})
