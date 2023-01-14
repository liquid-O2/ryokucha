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
      <menu className={`relative z-20 block text-inherit md:hidden `}>
        <button
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
          className={` hamburger relative flex h-12 w-12 flex-col items-center justify-center text-inherit`}
        >
          <span className='sr-only'>hamburger menu button</span>
          <m.span
            style={{ color, borderColor: color, backgroundColor: color }}
            className={`absolute mb-1 h-[2px] w-[24px] origin-center rounded-[10px]   transition-transform  ease-in ${
              hamburgerOpen ? ' top-[50%] rotate-[135deg] ' : 'top-[35%]'
            } border bg-current `}
          ></m.span>
          <m.span
            style={{ color, borderColor: color, backgroundColor: color }}
            className={` ${
              hamburgerOpen && 'opacity-0'
            } absolute  top-[50%] mb-1 h-[2px] w-[24px] origin-center rounded-[10px] border bg-current transition-transform ease-in `}
          ></m.span>
          <m.span
            style={{ color, borderColor: color, backgroundColor: color }}
            className={`absolute  h-[2px] w-[24px] origin-center transition-transform  ease-in ${
              hamburgerOpen ? 'top-[50%] -rotate-[135deg] ' : 'top-[65%]'
            } rounded-[10px] border bg-current   `}
          ></m.span>
        </button>
        <div className=' absolute top-full right-0 z-50 mt-2 min-w-[300px]  overflow-hidden text-primary'>
          <AnimatePresence initial={false}>
            {hamburgerOpen && (
              <m.menu
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: '-100%', opacity: 0 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.4 }}
                className=' m-2 flex flex-col gap-4 rounded-3xl border border-primary/10 bg-background px-6 py-4 shadow-md shadow-primary-dark/10'
              >
                <Link
                  href={'/'}
                  onClick={() => setHamburgerOpen(false)}
                  className='w-full py-3 transition-opacity duration-200 ease-in hover:opacity-50'
                >
                  home
                </Link>
                <Link
                  onClick={() => setHamburgerOpen(false)}
                  href={'/shop'}
                  className='w-full py-3 transition-opacity duration-200 ease-in hover:opacity-50 '
                >
                  shop
                </Link>
                {!isLoggedIn && (
                  <Link
                    href={'/login'}
                    onClick={() => setHamburgerOpen(false)}
                    className='w-full py-3 transition-opacity duration-200 ease-in hover:opacity-50'
                  >
                    login
                  </Link>
                )}
              </m.menu>
            )}
          </AnimatePresence>
        </div>
      </menu>
    </LazyMotion>
  )
}

export default HamburgerMenu
