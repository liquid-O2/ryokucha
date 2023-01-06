'use client'

import { AnimatePresence, LazyMotion, m, MotionValue, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const HamburgerMenu = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const path = usePathname()
  const color = useTransform(scrollYProgress, [0, 0.3], [path === '/' ? '#FCFFFD' : '#003D32', '#003D32'])
  const loadFeatures = () => import('../utils/framerFeatures').then((res) => res.default)

  return (
    <LazyMotion features={loadFeatures}>
      <div className={`relative z-20 block md:hidden text-inherit `}>
        <button
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
          className={` text-inherit hamburger relative w-12 h-12 flex flex-col justify-center items-center`}>
          <span className='sr-only'>hamburger menu button</span>
          <m.span
            style={{ color, borderColor: color }}
            className={`absolute w-[24px] h-[2px] origin-center mb-1 rounded-[10px]   transition-transform  ease-in ${
              hamburgerOpen ? ' rotate-[135deg] top-[50%] ' : 'top-[35%]'
            } border `}></m.span>
          <m.span
            style={{ color, borderColor: color }}
            className={` ${
              hamburgerOpen && 'opacity-0'
            } transition-transform  ease-in w-[24px] h-[2px] absolute origin-center top-[50%] mb-1 rounded-[10px]  border `}></m.span>
          <m.span
            style={{ color, borderColor: color }}
            className={`absolute  w-[24px] h-[2px] origin-center transition-transform  ease-in ${
              hamburgerOpen ? '-rotate-[135deg] top-[50%] ' : 'top-[65%]'
            } rounded-[10px] border    `}></m.span>
        </button>
        <div className=' text-primary absolute z-50 mt-2 top-full right-0  min-w-[300px] overflow-hidden'>
          <AnimatePresence initial={false}>
            {hamburgerOpen && (
              <m.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: '-100%', opacity: 0 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.4 }}
                className=' bg-background shadow-md border border-primary/10 shadow-primary-dark/10 rounded-3xl m-2 flex flex-col px-6 py-4 gap-4'>
                <Link
                  href={'/'}
                  onClick={() => setHamburgerOpen(false)}
                  className='hover:opacity-50 transition-opacity duration-200 ease-in py-3 w-full'>
                  home
                </Link>
                <Link
                  onClick={() => setHamburgerOpen(false)}
                  href={'/shop'}
                  className='hover:opacity-50 transition-opacity duration-200 ease-in py-3 w-full '>
                  shop
                </Link>
                {!isLoggedIn && (
                  <Link
                    href={'/login'}
                    onClick={() => setHamburgerOpen(false)}
                    className='hover:opacity-50 transition-opacity duration-200 ease-in py-3 w-full'>
                    login
                  </Link>
                )}
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </LazyMotion>
  )
}

export default HamburgerMenu
