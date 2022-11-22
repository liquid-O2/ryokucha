/* eslint-disable react/no-unescaped-entities */
import BaseForm from '../baseForm'
import { Dispatch, SetStateAction } from 'react'
import { RegisteredUsers } from '../forms'

export type formProps = {
  isRegister: boolean
  changeForm: Dispatch<SetStateAction<boolean>>
  registeredUsers: RegisteredUsers[]
  setRegisteredUsers: Dispatch<SetStateAction<RegisteredUsers[]>>
}

export default function LoginForm({ isRegister, changeForm, registeredUsers, setRegisteredUsers }: formProps) {
  return (
    <div className='form-wrapper flex flex-col justify-center items-start w-3/4 lg:w-auto'>
      <svg
        width='42'
        height='42'
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
        className='fill-neutral-200 mb-5'>
        <path d='M16 0L20.3215 11.6785L32 16L20.3215 20.3215L16 32L11.6785 20.3215L0 16L11.6785 11.6785L16 0Z' />
      </svg>
      <h4 className='text-4xl font-medium mb-8 text-neutral-200 '> Sign In </h4>
      <BaseForm
        isRegister={isRegister}
        changeForm={changeForm}
        registeredUsers={registeredUsers}
        setRegisteredUsers={setRegisteredUsers}
      />
      <div className='flex flex-col items-center justify-center  mt-7 w-full'>
        <h6 className='text-neutral-200 mb-3'>Don't have an account yet?</h6>
        <button
          className='bg-transparent px-4 py-4 text-lg rounded-lg text-neutral-200 border-solid border-2 border-neutral-500 font-bold w-full'
          onClick={() => changeForm(false)}>
          Register Now
        </button>
      </div>
    </div>
  )
}
