'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as Icon from 'react-feather'
import { useRouter } from 'next/navigation'
import React, { Dispatch, SetStateAction } from 'react'
import Input from './input'
import { signIn, signUp } from '../firebase/authHandlers'

//

export type Inputs = {
  email: string
  password: string
}

export type formProps = {
  isRegister: boolean
  setIsRegister: Dispatch<SetStateAction<boolean>>
}

//

export default function AuthForm({ isRegister, setIsRegister }: formProps) {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    resetField,
  } = useForm<Inputs>({ criteriaMode: 'all' })

  //

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    isRegister
      ? signUp(data.email, data.password, setError, router, resetField, setIsRegister)
      : signIn(data.email, data.password, setError, router, resetField)
  }

  //

  return (
    <div className='flex items-center flex-col w-full lg:w-auto text-green-900'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full lg:w-auto' autoComplete='off'>
        <div className='form-group flex flex-col gap-y-1 mb-4'>
          <label className='text-md' htmlFor='uname'>
            Email
          </label>
          <div className='input-wrapper'>
            <Input
              className={`input w-full ${errors.email ? 'border-red-600' : 'border-green-800 border-opacity-60'}`}
              type='email'
              placeholder='Enter your email'
              customAttr={{
                ...register('email', {
                  required: true,
                  pattern: { value: /[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+.[a-z]{2,}/, message: 'Invalid email format' },
                }),
              }}
            />
            <div className='icon'>
              <Icon.Mail size={20} className={errors.email ? 'stroke-red-600' : 'stroke-green-900'} />
            </div>
          </div>
          {errors.email && <p className='text-red-600 text-sm'>{`${errors.email?.message}`}</p>}
        </div>
        <div className='form-group flex flex-col gap-y-1 mb-7'>
          <label className='text-md' htmlFor='pwd'>
            Password
          </label>
          <div className='input-wrapper'>
            <Input
              className={`input ${errors.password ? 'border-red-600' : 'border-green-800 border-opacity-60'}`}
              type='password'
              placeholder='Enter your password'
              customAttr={{
                ...register('password', {
                  required: true,
                  minLength: { value: 8, message: 'Password must be atleast 8 characters' },
                }),
              }}
            />
            <div className='icon '>
              <Icon.Lock size={20} className={errors.password ? 'stroke-red-600' : 'stroke-green-900'} />
            </div>
          </div>
          {errors.password && <p className='text-red-600 text-sm'>{`${errors.password?.message}`}</p>}
        </div>
        <button
          className='bg-green-800 p-4 text-lg rounded-lg text-green-50 shadow-lg shadow-green-800/20 font-bold hover:bg-green-700'
          type='submit'>
          {isRegister ? 'Sign Up' : 'Login'}
        </button>
      </form>
    </div>
  )
}
