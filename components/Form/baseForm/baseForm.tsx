'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as Icon from 'react-feather'
import { formProps } from '../forms'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Input from '../input'
import { auth } from '../../../firebase/config'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

//

type Inputs = {
  email: string
  password: string
}

type ValidationErrors = { email: boolean; password: boolean }

//

export default function BaseForm({ isRegister, setIsRegister, registeredUsers, setRegisteredUsers }: formProps) {
  //

  const router = useRouter()

  const [isLoggedIn, setIsLoggedIn] = React.useState({ loggedIn: false })
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>({ criteriaMode: 'all' })

  //

  useEffect(() => {
    const loggedIn = JSON.stringify(isLoggedIn)
    localStorage.setItem('loggedIn', loggedIn)
  }, [isLoggedIn])

  // Firebase Custom functions
  const signIn = async (email: any, password: any, setError: any) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        router.push('/')
        console.log('signedIn')
      })
      .catch((error) => {
        setError('password', { type: 'custom', message: `${error.message}` })
      })
  }

  const signUp = async (email: any, password: any, setError: any) => {
    await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      return setError('password', { type: 'custom', message: `${error.message}` })
    })
  }
  //

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    isRegister ? signUp(data.email, data.password, setError) : signIn(data.email, data.password, setError)
  }

  //

  return (
    <div className='flex items-center flex-col w-full lg:w-auto text-neutral-200'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full lg:w-auto' autoComplete='off'>
        <div className='form-group flex flex-col gap-y-1 mb-4'>
          <label className='text-md' htmlFor='uname'>
            Email
          </label>

          <div className='input-wrapper'>
            {/* */}
            <Input
              className={errors.email ? 'border-red-400' : 'border-neutral-600'}
              type='email'
              placeholder='Enter your email'
              customAttr={{
                ...register('email', {
                  required: true,
                  pattern: { value: /[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+.[a-z]{2,}/, message: 'Invalid email format' },
                }),
              }}
            />

            <div className='icon '>
              <Icon.Mail size={20} className={errors.email ? 'stroke-red-400' : 'stroke-neutral-100'} />
            </div>
            {/*  */}
          </div>

          {/*  */}

          {errors.email && <p className='text-red-400 text-sm'>{errors.email && `${errors.email?.message}`}</p>}

          {/*  */}
        </div>

        <div className='form-group flex flex-col gap-y-1 mb-7'>
          {/*  */}

          <label className='text-md' htmlFor='pwd'>
            Password
          </label>

          <div className='input-wrapper'>
            {/* */}

            <Input
              className={errors.password ? 'border-red-400' : 'border-neutral-600'}
              type='password'
              placeholder='Enter your password'
              customAttr={{
                ...register('password', {
                  required: true,
                  minLength: { value: 8, message: 'Password must be atleast 8 characters' },
                }),
              }}
            />

            {/*  */}

            <div className='icon '>
              <Icon.Lock size={20} className={errors.password ? 'stroke-red-400' : 'stroke-neutral-100'} />
            </div>

            {/*  */}
          </div>

          {/*  */}

          {errors.password && (
            <p className='text-red-400 text-sm'>{errors.password && `${errors.password?.message}`}</p>
          )}

          {/*  */}
        </div>

        {/*  */}

        <button
          className='bg-neutral-200 px-4 py-4 text-lg rounded-lg text-neutral-900 shadow-lg shadow-neutral-200/20 font-bold hover:bg-neutral-300'
          type='submit'
          value='submit'>
          {isRegister ? 'Sign Up' : 'Login'}
        </button>

        {/*  */}
      </form>
    </div>
  )
}
