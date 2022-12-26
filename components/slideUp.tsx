'use client'
import { LazyMotion, m } from 'framer-motion'
import { ReactNode } from 'react'

export const SlideUp = ({ children }: { children: ReactNode }) => {
  const loadFeatures = () => import('./utils/framerFeatures').then((res) => res.default)
  return (
    <LazyMotion features={loadFeatures}>
      <div className='overflow-hidden h-max w-max'>
        <m.div
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: '0%', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}>
          {children}
        </m.div>
      </div>
    </LazyMotion>
  )
}

export default SlideUp
