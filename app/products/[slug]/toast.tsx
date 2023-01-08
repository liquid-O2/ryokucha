'use client'

import { m } from 'framer-motion'
import { Dispatch, SetStateAction, useEffect } from 'react'


type Toast = {
  setIsToastVisible: Dispatch<SetStateAction<boolean>>
}

const Toast = ({ setIsToastVisible }: Toast) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setIsToastVisible(false)
    }, 1200)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <m.div
        initial={{ y: -80, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        exit={{ y: -80, x: '-50%', opacity: 0 }}
        transition={{ duration: 0.4 }}
        className='fixed top-0  left-1/2 mt-8 flex h-14 w-80   items-center justify-center rounded-full bg-primary-dark  px-6 py-2 text-background md:-top-0 md:-translate-x-full '
      >
        <p className='flex items-center justify-center gap-2 text-lg text-neon'>Item added to cart</p>
      </m.div>
    </>
  )
}

export default Toast
