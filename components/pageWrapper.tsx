'use client'

import { AnimatePresence, LazyMotion, m } from 'framer-motion'
import { ReactNode, useEffect } from 'react'

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  const loadFeatures = () => import('../components/utils/framerFeatures').then((res) => res.default)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <LazyMotion features={loadFeatures}>
      <AnimatePresence>
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  )
}

export default PageWrapper
