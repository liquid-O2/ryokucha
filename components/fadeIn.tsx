'use client'
import { LazyMotion, m } from 'framer-motion'
import { ReactNode } from 'react'

export const FadeIn = ({ children }: { children: ReactNode }) => {
  const loadFeatures = () => import('./utils/framerFeatures').then((res) => res.default)
  return (
    <>
      <LazyMotion features={loadFeatures}>
        <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          {children}
        </m.div>
      </LazyMotion>
    </>
  )
}

export default FadeIn
