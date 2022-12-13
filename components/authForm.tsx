'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as Icon from 'react-feather'
import React, { Dispatch, SetStateAction, useContext } from 'react'
import Input from './input'
import { AuthContext } from './contextProvider'
import { signInWithEmailAndPassword } from 'firebase/auth'
import router from 'next/router'
import { auth } from '../firebase/config'
import { useRouter } from 'next/navigation'

export type Inputs = {
  email: string
  password: string
}

export type formProps = {
  isRegister: boolean
  setIsRegister: Dispatch<SetStateAction<boolean>>
}

export default function AuthForm() {
  const router = useRouter()
  const { signIn, signUp } = useContext(AuthContext)
  const [isRegister, setIsRegister] = React.useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    resetField,
  } = useForm<Inputs>({ criteriaMode: 'all' })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    isRegister
      ? signUp(data.email, data.password, setError, resetField, setIsRegister)
      : signIn(data.email, data.password, setError, resetField)
  }

  const handleGuestLogin = async () => {
    await signInWithEmailAndPassword(auth, 'guest@guest.com', 'guest1234').then(() => {
      router.push('/')
    })
  }

  return (
    <div className='form-wrapper flex flex-col justify-center items-start w-3/4 lg:w-auto'>
      <p className='text-4xl font-bold mb-8 text-primary '> {isRegister ? 'Create an account' : ' Sign In'} </p>
      <div className='flex items-center flex-col w-full lg:w-auto text-primary'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full lg:w-auto' autoComplete='off'>
          <div className='form-group flex flex-col gap-y-1 mb-4'>
            <label className='text-md' htmlFor='uname'>
              Email
            </label>
            <div className='input-wrapper'>
              <Input
                className={`input w-full ${errors.email ? 'border-rose-600' : 'border-primary border-opacity-60'}`}
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
                <Icon.Mail size={20} className={errors.email ? 'stroke-rose-600' : 'stroke-primary'} />
              </div>
            </div>
            {errors.email && <p className='text-rose-600 text-sm'>{`${errors.email?.message}`}</p>}
          </div>
          <div className='form-group flex flex-col gap-y-1 mb-7'>
            <label className='text-md' htmlFor='pwd'>
              Password
            </label>
            <div className='input-wrapper'>
              <Input
                className={`input ${errors.password ? 'border-rose-600' : 'border-primary border-opacity-60'}`}
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
                <Icon.Lock size={20} className={errors.password ? 'stroke-rose-600' : 'stroke-primary'} />
              </div>
            </div>
            {errors.password && <p className='text-rose-600 text-sm'>{`${errors.password?.message}`}</p>}
          </div>
          <button
            className='bg-primary p-4 text-lg rounded-full transition-colors text-background shadow-lg shadow-primary/40 font-bold hover:bg-green-700 '
            type='submit'>
            {isRegister ? 'Sign Up' : 'Login'}
          </button>
        </form>
      </div>
      <div className='flex flex-col items-center justify-center  mt-7 w-full'>
        <p className='text-primary mb-3'>{isRegister ? `Already have an account?` : `Don't have an account yet?`}</p>
        <button
          className='bg-transparent px-4 py-4 text-lg rounded-full text-primary border-solid border-2 border-primary border-opacity-50 font-bold w-full'
          onClick={() => setIsRegister(isRegister ? false : true)}>
          {isRegister ? 'Sign In' : ' Register Now'}
        </button>
        <button className='underline  mt-6 mb-4 text-lg' onClick={() => handleGuestLogin()}>
          Continue with a guest account
        </button>
      </div>
    </div>
  )
}
