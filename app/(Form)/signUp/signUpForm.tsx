/* eslint-disable react/no-unescaped-entities */
//

import BaseForm from '../baseForm/baseForm'
import { formProps } from '../forms'

//

export default function SignUpForm({ isRegister, setIsRegister, registeredUsers, setRegisteredUsers }: formProps) {
  return (
    <div className='form-wrapper flex flex-col justify-center items-start w-3/4 lg:w-auto'>
      <svg
        width='46'
        height='46'
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
        className='fill-neutral-200 mb-5'>
        <path d='M16 0C16 0 16 10.5 18.8284 13.1716C21.6569 15.8431 32 16 32 16C32 16 21.6569 15.6569 18.8284 18.8284C16 22 16 32 16 32C16 32 16 21.5 13.1716 18.8284C10.3431 16.1569 0 16 0 16C0 16 10.3431 16.3431 13.1716 13.1716C16 10 16 0 16 0Z' />
      </svg>
      <p className='text-4xl font-medium mb-8 text-neutral-200'> Sign Up </p>
      <BaseForm
        isRegister={isRegister}
        setIsRegister={setIsRegister}
        registeredUsers={registeredUsers}
        setRegisteredUsers={setRegisteredUsers}
      />
      <div className='flex flex-col items-center justify-center  mt-7 w-full'>
        <p className='text-neutral-200 mb-3'>Already have an account?</p>
        <button
          className='bg-transparent px-4 py-4 text-lg rounded-lg text-neutral-200 border-solid border-2 border-neutral-500 font-bold w-full'
          onClick={() => setIsRegister(false)}>
          Login now
        </button>
      </div>
    </div>
  )
}
