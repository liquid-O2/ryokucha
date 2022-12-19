'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const HamburgerMenu = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  return (
    <>
      <div className={`relative block md:hidden`}>
        <button
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
          className={`hamburger relative w-12 h-12 flex flex-col justify-center items-center`}>
          <span
            className={`absolute w-[24px] h-[2px] origin-center mb-1 rounded-[10px] bg-primary/80 transition-all 1s ease-in ${
              hamburgerOpen ? ' rotate-[135deg] top-[50%] ' : 'top-[35%]'
            } `}></span>
          <span
            className={` ${
              hamburgerOpen && 'opacity-0'
            } transition-all 1s ease-in w-[24px] h-[2px] absolute origin-center top-[50%] mb-1 rounded-[10px] bg-primary/80 `}></span>
          <span
            className={`absolute  w-[24px] h-[2px] origin-center transition-all 1s ease-in ${
              hamburgerOpen ? '-rotate-[135deg] top-[50%] ' : 'top-[65%]'
            } rounded-[10px] bg-primary/80`}></span>
        </button>
        <div className='absolute z-50 mt-4 top-full right-0  min-w-[300px] overflow-hidden'>
          <AnimatePresence initial={false}>
            {hamburgerOpen && (
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: '-100%', opacity: 0 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.3 }}
                className=' bg-background shadow-md shadow-primary-dark/10 rounded-3xl m-2 flex flex-col px-6 py-4 gap-4'>
                <Link
                  onClick={() => setHamburgerOpen(false)}
                  href={'/shop'}
                  className='hover:opacity-50 transition-opacity duration-200 ease-in py-3 w-full '>
                  shop
                </Link>
                <Link
                  href={'/search'}
                  onClick={() => setHamburgerOpen(false)}
                  className='hover:opacity-50 transition-opacity duration-200 ease-in py-3 w-full'>
                  search
                </Link>
                {!isLoggedIn && (
                  <Link
                    href={'/login'}
                    onClick={() => setHamburgerOpen(false)}
                    className='hover:opacity-50 transition-opacity duration-200 ease-in py-3 w-full'>
                    login
                  </Link>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default HamburgerMenu
