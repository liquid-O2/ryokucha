'use client'

import { Teas } from './popularTeasCarousel'

import Card from './productCardCopy'
import { m, LazyMotion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const Carousel = ({ teas, favourite }: { teas: Teas[] | undefined; favourite?: boolean }) => {
  const loadFeatures = () => import('./framerFeatures2').then((res) => res.default)
  const [leftConstraint, setLeftConstraint] = useState<number>(0)

  const id = 'carousel'
  const [key, setKey] = useState(0)

  const handleLeftConstraint = useCallback(() => {
    const el = document.getElementById(id)
    if (el) {
      setLeftConstraint(el.scrollWidth - el.offsetWidth)
    }
  }, [id])

  useEffect(() => {
    const el = document.getElementById(id)
    if (el) setLeftConstraint(el.scrollWidth - el.offsetWidth)
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
          {teas!.map((teas) => {
            const { id, image, price, name, attributes } = teas
            return (
              <Card
                key={id}
                img={image}
                price={price}
                title={name}
                attributes={attributes}
                id={id}
                className={'min-w-[300px] md:min-w-[360px]  mr-6 '}
              />
            )
          })}
        </m.div>
      </m.div>
    </LazyMotion>
  )
}

export default Carousel
