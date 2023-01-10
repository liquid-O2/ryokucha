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
        <m.div initial={{ y: 10 }} animate={{ y: 0 }} exit={{ y: 10 }} transition={{ duration: 0.4 }}>
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  )
}

export default PageWrapper
