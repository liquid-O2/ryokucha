'use client'
import { LazyMotion, m } from 'framer-motion'
import { ReactNode } from 'react'

export const SlideUp = ({ children, delay }: { children: ReactNode; delay?: number }) => {
  const loadFeatures = () => import('./utils/framerFeatures').then((res) => res.default)
  return (
    <LazyMotion features={loadFeatures}>
      <div className='overflow-hidden '>
        <m.div
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: '0%', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: delay ? delay : 0 }}>
          {children}
        </m.div>
      </div>
    </LazyMotion>
  )
}

export default SlideUp
