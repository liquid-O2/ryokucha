'use client'
import { useScroll, useTransform, motion } from 'framer-motion'

export const ScrollingText = () => {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, -300])
  return (
    <>
      <div className='scrolling-div mb-24 md:mb-32 w-screen overflow-hidden'>
        <motion.p
          style={{ x }}
          className=' text-3xl font-serif font-bold tracking-tight overscroll-x-none whitespace-nowrap'>{`Authentic Japanese Green Tea  –  緑茶  –  Rich, umami filled taste  –  緑茶  – Only from the best farms in Japan   – 緑茶  – Authentic Japanese Green Tea  –  緑茶  –  Rich, umami filled taste  –  緑茶  – Only from the best farms in Japan   – 緑茶  –`}</motion.p>
      </div>
    </>
  )
}
