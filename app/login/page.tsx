'use client'
import '/styles/globals.css'
import abstract from '/public/abstract.png'
import LoginForm from '../(Form)/Login/loginForm'
import Image from 'next/image'
import { useState } from 'react'
import SignUpForm from '../(Form)/SignUp/signupForm'

export default function Login() {
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const changeForm = (): void => {
    return setIsRegister((prevState) => !prevState)
  }
  return (
    <>
      <div className='container'>
        <div className='flex h-screen w-screen'>
          <div className='Form flex flex-col px-8 md:px-16 justify-center items-center w-full md:w-auto flex-1'>
            {isRegister ? (
              <SignUpForm changeForm={changeForm} isRegister={isRegister} />
            ) : (
              <LoginForm changeForm={changeForm} isRegister={isRegister} />
            )}
          </div>
          <div className='SplashImage hidden lg:block m-6 flex-1 relative'>
            <div className='helper-text'></div>
            <Image
              className='rounded-2xl w-full h-full object-cover'
              src={abstract}
              alt='picture of a sand dune in black and white'
              fill={false}
              quality={100}
            />
          </div>
        </div>
      </div>
    </>
  )
}
