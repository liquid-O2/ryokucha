import '@jest/globals'
import { render, screen } from './setupTests'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import AuthForm from '../components/authForm'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({ push: jest.fn(), prefetch: jest.fn() })),
}))

describe('Sign In Process', () => {
  const user = userEvent.setup()
  test('Check if errors get displayed if an user enters the wrong login information', async () => {
    render(<AuthForm />)
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
})

// describe('Sign Up Process', () => {
//   const user = userEvent.setup()
//   test('Check if errors get displayed if an user enters a password less than 8 characters', async () => {
//     render(<AuthForm isRegister={true} setIsRegister={mockSetIsRegister} />)
//     const emailField = screen.getByPlaceholderText('Enter your email')
//     const passField = screen.getByPlaceholderText('Enter your password')
//     const submitBtn = screen.getByText('Sign Up')

//     await user.type(emailField, 'test@teast.com')
//     await user.type(passField, 'test')
//     user.click(submitBtn)

//     const passErr = await screen.findByText('Password must be more than 8 characters', { exact: false })

//     await expect(passErr).toBeInTheDocument()
//   })

//   test('Check if errors get displayed if an user enters an invalid email format', async () => {
//     render(<AuthForm isRegister={true} setIsRegister={mockSetIsRegister} />)
//     const emailField = screen.getByPlaceholderText('Enter your email')
//     const passField = screen.getByPlaceholderText('Enter your password')
//     const submitBtn = screen.getByText('Sign Up')

//     await user.type(emailField, 'test@a.c')
//     await user.type(passField, 'test1234')
//     user.click(submitBtn)

//     const emailErr = await screen.findByText('Invalid email format', {
//       exact: false,
//     })

//     await expect(emailErr).toBeInTheDocument()
//   })

//   test('Check if the sign up button works as it is expected to', async () => {
//     render(<AuthForm />)
//     const emailField = screen.getByPlaceholderText('Enter your email')
//     const passField = screen.getByPlaceholderText('Enter your password')
//     const submitBtn = screen.getByText('Sign Up')

//     await user.type(emailField, 'test@test.com')
//     await user.type(passField, 'test1234')

//     user.click(submitBtn)

//     await expect(mockSetRegisteredUsers).toHaveBeenCalled()
//   })
// })
