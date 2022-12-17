'use client'
import { useScroll, useTransform, motion } from 'framer-motion'

export const ScrollingText = ({
  text,
  wrapperClass,
  textClass,
}: {
  text: string
  wrapperClass?: string
  textClass?: string
}) => {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 0.5], [0, -400])
  return (
    <>
      <aside className={`scrolling-div w-screen overflow-hidden ${wrapperClass}`}>
        <motion.p
          style={{ x }}
          className={`text-[10rem] font-serif font-bold tracking-tight overscroll-x-none whitespace-nowrap ${textClass}`}>{`${text}`}</motion.p>
      </aside>
    </>
  )
}
