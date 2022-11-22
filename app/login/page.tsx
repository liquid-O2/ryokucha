import '/styles/globals.css'
import fringe from '/public/fringe.png'
import Image from 'next/image'
import Forms from '../(Form)/forms'

//

export default function Login() {
  return (
    <>
      <div className='container font-sans'>
        <div className='flex h-screen w-screen'>
          <div className='Form flex flex-col px-8 md:px-16 justify-center items-center w-full md:w-auto flex-1'>
            <Forms />
          </div>
          <div className='SplashImage hidden lg:block m-6 flex-1 relative'>
            <div className='helper-text'></div>
            <Image
              className='rounded-2xl w-full h-full object-cover shadow-xl'
              src={fringe}
              alt='black and white picture of multiple large and narrow windows'
              fill={false}
              quality={75}
              priority
            />
          </div>
        </div>
      </div>
    </>
  )
}
