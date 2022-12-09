'use client'
import React from 'react'
import AuthForm from './authForm'

export default function DisplayForms() {
  //

  const [isRegister, setIsRegister] = React.useState<boolean>(false)

  //

  return (
    <>
      <div className='form-wrapper flex flex-col justify-center items-start w-3/4 lg:w-auto'>
        <p className='text-4xl font-bold mb-8 text-green-900 '> {isRegister ? 'Create an account' : ' Sign In'} </p>
        <AuthForm isRegister={isRegister} setIsRegister={setIsRegister} />
        <div className='flex flex-col items-center justify-center  mt-7 w-full'>
          <p className='text-green-900 mb-3'>
            {isRegister ? `Already have an account?` : `Don't have an account yet?`}
          </p>
          <button
            className='bg-transparent px-4 py-4 text-lg rounded-lg text-green-900 border-solid border-2 border-green-900 border-opacity-50 font-bold w-full'
            onClick={() => setIsRegister(isRegister ? false : true)}>
            {isRegister ? 'Sign In' : ' Register Now'}
          </button>
        </div>
      </div>
    </>
  )
}
