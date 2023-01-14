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
  }, [setIsToastVisible])

  return (
    <>
      <m.dialog
        initial={{ y: -80, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        exit={{ y: -80, x: '-50%', opacity: 0 }}
        transition={{ duration: 0.4 }}
        className='fixed top-0 left-1/2 right-1/2  z-[52] mt-20 flex h-14 w-80 items-center   justify-center rounded-full bg-primary-dark px-6  py-2 text-background md:-top-0 md:mt-8  '>
        <p className='flex items-center justify-center gap-2 text-lg text-neon'>Item added to cart</p>
      </m.dialog>
    </>
  )
}

export default Toast
