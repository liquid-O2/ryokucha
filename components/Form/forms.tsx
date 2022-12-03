'use client'
import React, { Dispatch, SetStateAction } from 'react'
import BaseForm from './baseForm/baseForm'
import Star from './Star'

export type RegisteredUsers = {
  email: string
  password: string
}

export type formProps = {
  isRegister: boolean
  setIsRegister: Dispatch<SetStateAction<boolean>>
}

export default function Forms() {
  //

  const [isRegister, setIsRegister] = React.useState<boolean>(false)

  //

  return (
    <>
      <div className='form-wrapper flex flex-col justify-center items-start w-3/4 lg:w-auto'>
        <Star className='fill-neutral-200 mb-5' />
        <p className='text-4xl font-medium mb-8 text-neutral-200 '> {isRegister ? 'Create an account' : ' Sign In'} </p>
        <BaseForm isRegister={isRegister} setIsRegister={setIsRegister} />
        <div className='flex flex-col items-center justify-center  mt-7 w-full'>
          <p className='text-neutral-200 mb-3'>
            {isRegister ? `Already have an account?` : `Don't have an account yet?`}
          </p>
          <button
            className='bg-transparent px-4 py-4 text-lg rounded-lg text-neutral-200 border-solid border-2 border-neutral-500 font-bold w-full'
            onClick={() => setIsRegister(isRegister ? false : true)}>
            {isRegister ? 'Sign In' : ' Register Now'}
          </button>
        </div>
      </div>
    </>
  )
}
