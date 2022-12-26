'use client'
import { LazyMotion, m } from 'framer-motion'
import { ReactNode } from 'react'

export const SlideUp = ({ children, delayAnimation }: { children: ReactNode; delayAnimation?: number }) => {
  const loadFeatures = () => import('./utils/framerFeatures').then((res) => res.default)
  return (
    <LazyMotion features={loadFeatures}>
      <div className='overflow-hidden '>
        <m.div
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: '0%', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delayAnimation ? delayAnimation : 0, ease: 'easeOut' }}>
          {children}
        </m.div>
      </div>
    </LazyMotion>
  )
}

export default SlideUp
