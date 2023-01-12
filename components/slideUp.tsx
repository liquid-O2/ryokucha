'use client'
import { m, LazyMotion } from 'framer-motion'
import { ReactNode } from 'react'

const SlideUp = ({ children, delay }: { children: ReactNode; delay?: number }) => {
  const loadFeatures = () => import('./utils/framerFeatures').then((res) => res.default)
  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: delay || 0.1 }}
        viewport={{ once: true }}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}

export default SlideUp
