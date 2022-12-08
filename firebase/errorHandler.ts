import { UseFormSetError } from 'react-hook-form'
import { Inputs } from '../components/authForm'

const handleErrors = (message: string, setError: UseFormSetError<Inputs>) => {
  if (message.includes('user-not-found')) {
    setError('password', { type: 'custom', message: `This user doesn't exist` })
    setError('email', { type: 'custom', message: '' })
  } else if (message.includes('wrong-password') || message.includes('incorrect email')) {
    setError('password', { type: 'custom', message: `The email or password is incorrect, please check again` })
    setError('email', { type: 'custom', message: '' })
  } else if (message.includes('email-already-in-use')) {
    setError('password', { type: 'custom', message: `The user already exists, sign in instead` })
    setError('email', { type: 'custom', message: '' })
  } else {
    setError('password', { type: 'custom', message: `${message}` })
  }
}

export default handleErrors
