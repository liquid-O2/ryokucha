import '@jest/globals'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import SignInForm from './signInForm'

const mockSetIsRegister = jest.fn()
const mockSetRegisteredUsers = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Sign In Form', () => {
  test('Check if the register now button works as it should', async () => {
    render(
      <SignInForm
        isRegister={false}
        setIsRegister={mockSetIsRegister()}
        registeredUsers={[]}
        setRegisteredUsers={mockSetRegisteredUsers()}
      />
    )

    await expect(mockSetIsRegister).toHaveBeenCalled()
  })
})
