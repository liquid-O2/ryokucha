'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Mail, Lock } from 'react-feather'
import React, { Dispatch, SetStateAction, useContext } from 'react'
import Input from './input'
import { GlobalContext } from './contextProvider'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'
import { useRouter } from 'next/navigation'
import GoogleIcon from './icons/googleIcon'
import Button from './button'

export type Inputs = {
  email: string
  password: string
  username: string
}

export type formProps = {
  isRegister: boolean
  setIsRegister: Dispatch<SetStateAction<boolean>>
}

export default function AuthForm() {
  const router = useRouter()
  const { signIn, signUp, signUpWithGoogle, isLoggedIn } = useContext(GlobalContext)
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

  if (isLoggedIn) {
    router.push('/')
  }

  return (
    <div className='mt-16 mb-16 flex w-[501px] max-w-[95%] flex-col items-center justify-center'>
      <p className='text-3xl font-semibold'>{isRegister ? 'Create an account' : 'Login'}</p>
      <button
        onClick={() => signUpWithGoogle()}
        className='mt-5 flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-8 py-4 text-base text-neutral-700'
      >
        <GoogleIcon size='24' /> {isRegister ? 'Sign up with Google' : 'Sign in with Google'}
      </button>
      <div className='relative mt-5 flex h-5 w-full items-center justify-center'>
        <div className='h-[1px] w-[98%] bg-primary/10'></div>
        <div className='absolute top-0 mx-auto'>
          <p className='h-full bg-background px-4 text-center text-base'>or</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-5 flex w-full flex-col gap-6' autoComplete='off'>
        <div className='form-group flex flex-col gap-y-2 '>
          <label className='text-sm leading-none' htmlFor='email'>
            Email
          </label>
          <div className='input-wrapper'>
            <Input
              className={` w-full rounded-xl bg-tertiary-light bg-opacity-[0.01] ${
                errors.email ? 'border-rose-500' : 'border-primary/10 '
              }`}
              type='email'
              placeholder='Enter your email'
              name='email'
              customAttr={{
                ...register('email', {
                  required: true,
                  pattern: {
                    value: /[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+.[a-z]{2,}/,
                    message: 'Invalid email format',
                  },
                }),
              }}
            />
            <div className='icon pointer-events-none absolute left-[1rem] top-[0.95rem]'>
              <Mail size={20} className={`${errors.email && 'stroke-rose-500/70'} stroke-primary/70`} />
            </div>
          </div>
          {errors.email && <p className='text-sm text-rose-500'>{`${errors.email?.message}`}</p>}
        </div>
        <div className='form-group flex flex-col gap-y-2 '>
          <label className='text-sm leading-none' htmlFor='password'>
            Password
          </label>
          <div className='input-wrapper'>
            <Input
              className={` w-full rounded-xl bg-tertiary-light bg-opacity-[0.01] ${
                errors.password ? 'border-rose-500' : 'border-primary/10 '
              }`}
              type='password'
              name='password'
              placeholder='Enter your password'
              customAttr={{
                ...register('password', {
                  required: true,
                  minLength: {
                    value: 8,
                    message: 'Password must be atleast 8 characters',
                  },
                }),
              }}
            />
            <div className='icon pointer-events-none absolute left-[1rem] top-[0.95rem]'>
              <Lock size={20} className={`${errors.password && 'stroke-rose-500/70'} stroke-primary/70`} />
            </div>
          </div>
          {errors.password && <p className='text-sm text-rose-500'>{`${errors.password?.message}`}</p>}
        </div>
        <Button variant='secondary' type='submit' className='mt-2 w-full'>
          {isRegister ? 'Sign Up' : 'Login'}
        </Button>
      </form>
      <div className='relative mt-6 flex h-5 w-full items-center justify-center'>
        <div className='h-[1px] w-[98%] bg-primary/10'></div>
        <div className='absolute top-0 mx-auto'>
          <p className='h-full bg-background px-4 text-center text-base'>
            {isRegister ? 'Already have an account?' : `Don't have an account?`}
          </p>
        </div>
      </div>
      <Button
        variant='tertiary'
        className='mt-6 w-full'
        onClick={() => {
          setIsRegister((prev) => !prev)
          resetField('email')
          resetField('password')
        }}
      >
        {isRegister ? 'Login' : 'Register now'}
      </Button>
      <button
        className='mt-8 w-full text-center text-base underline underline-offset-2'
        onClick={() => handleGuestLogin()}
      >
        Continue with a guest account
      </button>
    </div>
  )
}
