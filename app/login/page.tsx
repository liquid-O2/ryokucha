import '/styles/globals.css'
import abstract from '/public/abstract.png'
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
          <div className='SplashImage hidden lg:block  flex-1 relative'>
            <Image
              className=' w-full h-full object-cover '
              src={abstract}
              alt='black and white picture of abstract shapes'
              fill={false}
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </>
  )
}
