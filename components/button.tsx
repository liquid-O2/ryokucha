'use client'

import { m, LazyMotion } from 'framer-motion'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary'
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({ variant, children, className, onClick, type }: ButtonProps) => {
  const loadFeatures = () => import('./framerFeatures').then((res) => res.default)

  // framer variants
  const button = {
    visible: { opacity: 1 },
    hidden: { opacity: 1 },
    hover: { opacity: 1 },
  }

  const buttonCircle = {
    visible: { scale: 1 },
    hover: { y: 0, scale: 99, transition: { duration: 0.5 } },
    hidden: { y: '-100%', scale: 1 },
  }

  if (variant != 'tertiary')
    return (
      <LazyMotion features={loadFeatures}>
        <m.button
          onClick={onClick}
          type={type}
          variants={button}
          initial='hidden'
          whileInView='visible'
          whileHover='hover'
          className={`overflow-hidden relative self-center flex justify-center items-center text-center  px-8 py-4 ${
            variant === 'primary' ? 'bg-primary text-background' : ' bg-neon text-primary'
          } rounded-full ${className}`}>
          <m.div
            variants={buttonCircle}
            className={`${
              variant === 'primary' ? 'bg-primary-dark' : ' bg-neon-dark'
            } w-2 h-2 absolute top-0 left-[50%] rounded-full z-10`}></m.div>
          <span className='relative z-20 text-base  font-bold'>{children}</span>
        </m.button>
      </LazyMotion>
    )

  return (
    <button
      onClick={onClick}
      type={type}
      className={`overflow-hidden relative self-center flex justify-center items-center text-center  px-8 py-4 border border-primary/20 rounded-full ${className}`}>
      <span className='relative z-20 text-base  font-bold'>{children}</span>
    </button>
  )
}

export default Button
