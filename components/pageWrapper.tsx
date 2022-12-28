'use client'

import { AnimatePresence, LazyMotion, m } from 'framer-motion'
import { ReactNode } from 'react'

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  const loadFeatures = () => import('../components/utils/framerFeatures').then((res) => res.default)
  return (
    <LazyMotion features={loadFeatures}>
      <AnimatePresence>
        <m.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.4 }}>
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  )
}

export default PageWrapper
