'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Mail, Lock } from 'react-feather'
import React, { Dispatch, SetStateAction, useContext } from 'react'
import Input from './input'
import { GlobalContext } from './contextProvider'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { m, LazyMotion } from 'framer-motion'
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
  const { signIn, signUp } = useContext(GlobalContext)
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

  // framer motion
  const loadFeatures = () => import('./framerFeatures').then((res) => res.default)

  const buttonCircle = {
    visible: { scale: 1 },
    hover: { y: 0, scale: 99, transition: { duration: 0.4 } },
    hidden: { y: '-150%', scale: 1 },
  }

  return (
    <LazyMotion features={loadFeatures}>
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
                  className={`input rounded-xl w-full lg:w-auto  ${
                    errors.email ? 'border-rose-500' : 'border-primary border-opacity-60'
                  }`}
                  type='email'
                  placeholder='Enter your email'
                  customAttr={{
                    ...register('email', {
                      required: true,
                      pattern: { value: /[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+.[a-z]{2,}/, message: 'Invalid email format' },
                    }),
                  }}
                />
                <div className='icon absolute left-[1rem] top-[1.15rem] pointer-events-none'>
                  <Mail size={20} className={errors.email ? 'stroke-rose-500' : 'stroke-primary'} />
                </div>
              </div>
              {errors.email && <p className='text-rose-500 text-sm'>{`${errors.email?.message}`}</p>}
            </div>
            <div className='form-group flex flex-col gap-y-1 mb-7'>
              <label className='text-md' htmlFor='pwd'>
                Password
              </label>
              <div className='input-wrapper'>
                <Input
                  className={`input rounded-xl w-full lg:w-auto ${
                    errors.password ? 'border-rose-500' : 'border-primary border-opacity-60'
                  }`}
                  type='password'
                  placeholder='Enter your password'
                  customAttr={{
                    ...register('password', {
                      required: true,
                      minLength: { value: 8, message: 'Password must be atleast 8 characters' },
                    }),
                  }}
                />
                <div className='icon absolute left-[1rem] top-[1.15rem] pointer-events-none'>
                  <Lock size={20} className={errors.password ? 'stroke-rose-500' : 'stroke-primary'} />
                </div>
              </div>
              {errors.password && <p className='text-rose-500 text-sm'>{`${errors.password?.message}`}</p>}
            </div>
            <m.button
              initial='hidden'
              whileInView='visible'
              whileHover='hover'
              className='bg-primary relative overflow-hidden p-4 text-lg rounded-xl transition-colors text-background shadow-lg shadow-primary/40 font-bold '
              type='submit'>
              <m.div
                variants={buttonCircle}
                className='bg-primary-dark w-2 h-2 absolute top-0 left-[50%] rounded-full z-10'></m.div>
              <span className='relative z-20'>{isRegister ? 'Sign Up' : 'Login'}</span>
            </m.button>
          </form>
        </div>
        <div className='flex flex-col items-center justify-center  mt-7 w-full'>
          <p className='text-primary mb-3'>{isRegister ? `Already have an account?` : `Don't have an account yet?`}</p>
          <button
            className='bg-transparent px-4 py-4 text-lg rounded-xl text-primary border-solid border-2 border-primary border-opacity-50 font-bold w-full'
            onClick={() => setIsRegister(isRegister ? false : true)}>
            {isRegister ? 'Sign In' : ' Register Now'}
          </button>
          <button className='underline  mt-6 mb-4 text-lg' onClick={() => handleGuestLogin()}>
            Continue with a guest account
          </button>
        </div>
      </div>
    </LazyMotion>
  )
}
