import '/styles/globals.css'
import Login5 from '/public/Login5.jpg'
import Image from 'next/image'

import AuthForm from '../../components/authForm'

//

export default function Login() {
  return (
    <>
      <div className='container font-sans relative'>
        <div className='flex h-[calc(100vh-4rem)] w-screen'>
          <div className='Form flex flex-col px-8 md:px-16 justify-center items-center w-full md:w-auto flex-1'>
            <AuthForm />
          </div>
          <div className='SplashImage hidden lg:block flex-1 relative'>
            <Image
              className='w-full h-full object-cover'
              src={Login5}
              alt='black and white picture of abstract shapes'
              fill={false}
              quality={45}
              priority
            />
          </div>
        </div>
      </div>
    </>
  )
}
