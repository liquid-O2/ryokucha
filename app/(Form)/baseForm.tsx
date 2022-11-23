'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as Icon from 'react-feather'
import { formProps } from './Login/loginForm'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
//

type Inputs = {
  email: string
  password: string
}

type ValidationErrors = { email: boolean; password: boolean }

export default function BaseForm({ isRegister, changeForm, registeredUsers, setRegisteredUsers }: formProps) {
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({ email: false, password: false })
  const [isLoggedIn, setIsLoggedIn] = useState({ loggedIn: false })
  useEffect(() => {
    const loggedIn = JSON.stringify(isLoggedIn)
    localStorage.setItem('loggedIn', loggedIn)
  }, [isLoggedIn])
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    isRegister
      ? setRegisteredUsers((prevState) => [...prevState, { email: data.email, password: data.password }])
      : setValidationErrors({ email: true, password: true })
    registeredUsers.map(({ email, password }) => {
      if (data.password === password && data.email === email) {
        router.push('/')
        setIsLoggedIn({ loggedIn: true })
        setValidationErrors({ email: false, password: false })
      }
    })
  }

  return (
    <div className='flex items-center flex-col w-full lg:w-auto text-neutral-200'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full lg:w-auto' autoComplete='off'>
        <div className='form-group flex flex-col gap-y-1 mb-4'>
          <label className='text-md' htmlFor='uname'>
            Email
          </label>

          <div className='input-wrapper'>
            <input
              className={`pr-4 pl-11 py-3 rounded-lg border-2 ${
                validationErrors.email ? 'border-red-400' : 'border-neutral-600'
              }  bg-neutral-700 text-neutral-200 w-full lg:w-auto max-w-none`}
              type='email'
              id='uname'
              placeholder='Enter your email'
              {...register('email', {
                required: true,
                pattern: /[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+.[a-z]{2,}/,
              })}
            />

            <div className='icon '>
              <Icon.Mail size={20} className={validationErrors.email ? 'stroke-red-400' : 'stroke-neutral-100'} />
            </div>
          </div>
          {(validationErrors.email || errors.email) && (
            <p className='text-red-400 text-sm'>{isRegister ? 'Invalid email format' : 'Incorrect email'}</p>
          )}
        </div>

        <div className='form-group flex flex-col gap-y-1 mb-7'>
          <label className='text-md' htmlFor='pwd'>
            Password
          </label>

          <div className='input-wrapper'>
            <input
              className={`pr-4 pl-11 py-3 rounded-lg border-2 bg-neutral-700 ${
                validationErrors.password ? 'border-red-400' : 'border-neutral-600'
              } w-full lg:w-auto max-w-none `}
              type='password'
              id='pwd'
              placeholder='Enter your password'
              {...register('password', {
                required: true,
                minLength: 8,
              })}
            />

            <div className='icon '>
              <Icon.Lock size={20} className={validationErrors.password ? 'stroke-red-400' : 'stroke-neutral-100'} />
            </div>
          </div>
          {(validationErrors.password || errors.password) && (
            <p className='text-red-400 text-sm'>
              {isRegister ? 'Password must be more than 8 characters' : 'Incorrect password'}
            </p>
          )}
        </div>

        <button
          className='bg-neutral-200 px-4 py-4 text-lg rounded-lg text-neutral-900 shadow-lg shadow-neutral-200/20 font-bold'
          type='submit'
          value='submit'>
          {isRegister ? 'Sign Up' : 'Login'}
        </button>
      </form>
    </div>
  )
}
