'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageWrapper
