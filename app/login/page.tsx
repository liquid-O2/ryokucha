'use client'
import '/styles/globals.css'
import loginImage from '/public/Login.webp'
import Image from 'next/image'

import AuthForm from '../../components/authForm'
import { LazyMotion, m } from 'framer-motion'

//

export default function Login() {
  const loadFeatures = () => import('../../components/framerFeatures').then((res) => res.default)
  return (
    <>
      <LazyMotion features={loadFeatures}>
        <div className='container font-sans relative mb-24 md:mb-32'>
          <div className='flex h-[calc(100vh-4rem)] w-screen'>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className='Form flex flex-col px-8 md:px-16 justify-center items-center w-full md:w-auto flex-1'>
              <AuthForm />
            </m.div>
            <div className='SplashImage hidden lg:block flex-1 relative '>
              <m.div
                initial={{ height: '100%' }}
                whileInView={{ height: '0%' }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='absolute top-0 w-full h-full z-20 bg-primary'></m.div>
              <Image
                className='w-full h-full object-cover'
                src={loginImage}
                alt='black and white picture of abstract shapes'
                fill={false}
                quality={45}
                priority
              />
            </div>
          </div>
        </div>
      </LazyMotion>
    </>
  )
}
