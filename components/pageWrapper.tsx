'use client'

import { AnimatePresence, LazyMotion, m } from 'framer-motion'
import React, { ReactNode, useEffect } from 'react'

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  const loadFeatures = () => import('../components/utils/framerFeatures').then((res) => res.default)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <LazyMotion features={loadFeatures}>
      <AnimatePresence>
        <m.section
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.4 }}
        >
          {children}
        </m.section>
      </AnimatePresence>
    </LazyMotion>
  )
}

export default PageWrapper
