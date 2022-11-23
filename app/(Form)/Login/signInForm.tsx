/* eslint-disable react/no-unescaped-entities */
import BaseForm from '../BaseForm/baseForm'
import { Dispatch, SetStateAction } from 'react'
import { RegisteredUsers } from '../forms'
import Star from '../star'

export type formProps = {
  isRegister: boolean
  setIsRegister: Dispatch<SetStateAction<boolean>>
  registeredUsers: RegisteredUsers[]
  setRegisteredUsers: Dispatch<SetStateAction<RegisteredUsers[]>>
}

export default function LoginForm({ isRegister, setIsRegister, registeredUsers, setRegisteredUsers }: formProps) {
  return (
    <div className='form-wrapper flex flex-col justify-center items-start w-3/4 lg:w-auto'>
      <Star />
      <h4 className='text-4xl font-medium mb-8 text-neutral-200 '> Sign In </h4>
      <BaseForm
        isRegister={isRegister}
        setIsRegister={setIsRegister}
        registeredUsers={registeredUsers}
        setRegisteredUsers={setRegisteredUsers}
      />
      <div className='flex flex-col items-center justify-center  mt-7 w-full'>
        <h6 className='text-neutral-200 mb-3'>Don't have an account yet?</h6>
        <button
          className='bg-transparent px-4 py-4 text-lg rounded-lg text-neutral-200 border-solid border-2 border-neutral-500 font-bold w-full'
          onClick={() => setIsRegister(true)}>
          Register Now
        </button>
      </div>
    </div>
  )
}
