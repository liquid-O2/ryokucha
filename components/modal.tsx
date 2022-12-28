'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { AlertCircle, Check, CheckCircle, X } from 'react-feather'
import Button from './button'

type Variant = 'success' | 'error'

export const Modal = () => {
  const [variant, setVariant] = useState<Variant>()
  const [isVisible, setIsVisible] = useState(false)
  const path = useSearchParams()
  const canceled = path.get('canceled')
  const success = path.get('success')

  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = ''
  }, [])

  useEffect(() => {
    if (canceled) {
      setIsVisible(true)
      setVariant('error')
    } else if (success) {
      setIsVisible(true)
      setVariant('success')
    }
    lockScroll()

    return () => {
      setIsVisible(false)
      unlockScroll()
    }
  }, [path])

  return (
    <>
      {isVisible && (
        <div className='absolute top-0 left-0 h-screen w-screen z-[9999] bg-[#000E0B78] flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center bg-background rounded-3xl p-8'>
            <div className='relative -mt-6 -mr-8 w-full flex justify-end'>
              <Link href={'/'}>
                <button className='w-12 h-12 flex justify-center items-center'>
                  <X size={24} />
                </button>
              </Link>
            </div>
            <div className='flex flex-col items-center'>
              <span>
                {variant === 'success' ? (
                  <CheckCircle size={48} className=' stroke-green-700' />
                ) : (
                  <AlertCircle size={48} className='stroke-rose-600' />
                )}
              </span>
              <span className='text-lg mt-6 mb-6 text-center font-bold leading-tight'>
                {variant === 'success' ? (
                  <span>
                    Congrats! <br />
                    Your order has been confirmed
                  </span>
                ) : (
                  <span>Your order couldn't be processed</span>
                )}
              </span>
              <Link href={'/'}>
                <Button variant='secondary'>GO BACK TO HOMESCREEN</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
