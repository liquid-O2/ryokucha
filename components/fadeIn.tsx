'use client'
import { LazyMotion, m } from 'framer-motion'
import { ReactNode } from 'react'

export const FadeIn = ({ children }: { children: ReactNode }) => {
  const loadFeatures = () => import('./utils/framerFeatures').then((res) => res.default)
  return (
    <>
      <LazyMotion features={loadFeatures}>
        <div className='overflow-hidden h-max w-max'>
          <m.div initial={{ y: '20%', opacity: 0 }} animate={{ y: '0%', opacity: 1 }} transition={{ duration: 1 }}>
            {children}
          </m.div>
        </div>
      </LazyMotion>
    </>
  )
}

export default FadeIn
