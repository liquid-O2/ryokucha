'use client'

import { m, LazyMotion } from 'framer-motion'

const Button = ({
  type,
  children,
  className,
}: {
  type: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}) => {
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

  return (
    <>
      <LazyMotion features={loadFeatures}>
        <m.button
          variants={button}
          initial='hidden'
          whileInView='visible'
          whileHover='hover'
          className={`overflow-hidden relative self-center flex justify-center items-center text-center mt-12 px-8 py-4 ${
            type === 'primary' ? 'bg-primary text-background' : ' bg-neon text-primary'
          } rounded-full ${className}`}>
          <m.div
            variants={buttonCircle}
            className={`${
              type === 'primary' ? 'bg-primary-dark' : ' bg-neon-dark'
            } w-2 h-2 absolute top-0 left-[50%] rounded-full z-10`}></m.div>
          <span className='relative z-20 text-base md:text-lg font-bold'>{children}</span>
        </m.button>
      </LazyMotion>
    </>
  )
}

export default Button
