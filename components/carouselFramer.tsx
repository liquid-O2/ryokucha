'use client'

import { m, LazyMotion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const loadFeatures = () => import('./framerFeaturesMax').then((res) => res.default)
  const [leftConstraint, setLeftConstraint] = useState<number>(0)
  const id = 'carousel'

  //hacky state that updates when resized in order to make the component re-render
  const [key, setKey] = useState(0)

  const handleLeftConstraint = useCallback(() => {
    const el = document.getElementById(id)
    if (el) {
      setLeftConstraint(el.scrollWidth - el.offsetWidth)
    }
  }, [id])

  useEffect(() => {
    handleLeftConstraint()
    const handleResize = () => {
      setKey((prev) => prev + 1)
      handleLeftConstraint()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleLeftConstraint])

  return (
    <LazyMotion features={loadFeatures}>
      <m.div id={id} key={key} className='carousel cursor-grab overflow-hidden  ' whileTap={{ cursor: 'grabbing' }}>
        <m.div drag='x' dragConstraints={{ right: 0, left: -leftConstraint }} className='inner-carousel flex '>
          {children}
        </m.div>
      </m.div>
    </LazyMotion>
  )
}

export default Carousel
