'use client'
import Link from 'next/link'
import { m, LazyMotion } from 'framer-motion'
const Button = () => {
  const loadFeatures = () => import('./framerFeatures').then((res) => res.default)
  const button = {
    visible: { opacity: 1, y: '0%' },
    hidden: { opacity: 1, y: '0%' },
    hover: { opacity: 1 },
  }
  const buttonCircle = {
    visible: { scale: 1 },
    hover: { y: 0, scale: 99, transition: { duration: 0.4 } },
    hidden: { y: '-100%', scale: 1 },
  }
  return (
    <>
      <LazyMotion features={loadFeatures}>
        <m.button
          variants={button}
          initial='hidden'
          whileInView='visible'
          whileHover='hover'
          className='overflow-hidden self-center flex justify-center items-center text-center mt-12 px-8 py-4 bg-neon text-primary rounded-full'>
          <m.div
            variants={buttonCircle}
            className='bg-neon-dark w-2 h-2 absolute top-0 left-[50%] rounded-full z-10'></m.div>
          <Link href={'/shop'} className=' font-bold text-lg'>
            <span className='relative z-20'> BROWSE MORE TEAS</span>
          </Link>
        </m.button>
      </LazyMotion>
    </>
  )
}

export default Button
