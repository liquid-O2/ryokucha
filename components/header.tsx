'use client'
import { signOut } from 'firebase/auth'
import { useScroll, useTransform, m, LazyMotion } from 'framer-motion'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useContext } from 'react'
import * as Icon from 'react-feather'
import { auth } from '../firebase/config'
import { Container } from './container'
import { GlobalContext } from './contextProvider'

const Header = () => {
  const { isLoggedIn } = useContext(GlobalContext)
  const pathname = usePathname()
  //framer

  const { scrollYProgress } = useScroll()
  const backgroundColor = useTransform(scrollYProgress, [0, 0.3], ['#F4F4EE00', '#F4F4EE80'])
  const textColour = useTransform(scrollYProgress, [0, 0.3], ['#F4F4EE', '#002921'])
  const loadFeatures = () => import('./framerFeatures').then((res) => res.default)
  if (pathname === '/')
    return (
      <LazyMotion features={loadFeatures}>
        <m.header
          style={{ backgroundColor, color: textColour }}
          className={`header w-full font-serif font-bold bg-background leading-none fixed top-0 left-0  z-50`}>
          <Container className='h-16 flex rounded-3xl items-center  z-[90]'>
            <Link href={'/'} className='mr-auto'>
              <p className='text-3xl'>r.</p>
            </Link>
            <nav className='flex gap-x-4 md:gap-x-6'>
              <Link href={'/'} className='text-lg  '>
                shop
              </Link>
              <Link href={'/'} className='text-lg '>
                search
              </Link>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    signOut(auth)
                  }}
                  className='text-lg'>
                  logout
                </button>
              ) : (
                <Link href={'/login'} className='text-lg  mr-2'>
                  login
                </Link>
              )}
              <button>
                <span className='sr-only'>Cart</span>
                <Icon.ShoppingCart size={20} />
              </button>
            </nav>
          </Container>
        </m.header>
      </LazyMotion>
    )
  else
    return (
      <header className={`header w-full font-serif font-bold bg-background/75 leading-none fixed top-0 left-0  z-50`}>
        <Container className='h-16 flex rounded-3xl items-center  z-[90]'>
          <Link href={'/'} className='mr-auto'>
            <p className='text-3xl'>r.</p>
          </Link>
          <nav className='flex gap-x-4 md:gap-x-6'>
            <Link href={'/'} className='text-lg  '>
              shop
            </Link>
            <Link href={'/'} className='text-lg '>
              search
            </Link>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  signOut(auth)
                }}
                className='text-lg'>
                logout
              </button>
            ) : (
              <Link href={'/login'} className='text-lg  mr-2'>
                login
              </Link>
            )}
            <button>
              <span className='sr-only'>Cart</span>
              <Icon.ShoppingCart size={20} />
            </button>
          </nav>
        </Container>
      </header>
    )
}

export default Header
