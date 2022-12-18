'use client'
import { signOut } from 'firebase/auth'
import { useScroll, useTransform, m, LazyMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import * as Icon from 'react-feather'
import { auth } from '../firebase/config'
import { Container } from './container'
import { GlobalContext } from './contextProvider'
import emptyProfile from '../public/Frame 61.png'
const Header = () => {
  const { isLoggedIn, cartItemNo, userDetails } = useContext(GlobalContext)
  const { photoUrl } = userDetails
  const pathname = usePathname()

  //framer
  const { scrollYProgress } = useScroll()

  let backgroundColorProgress = { first: '#F4F4EE90', second: '#F4F4EE90' }
  let scrollProgress = { first: 0, second: 0 }
  let textColorProgress = { first: '#002921', second: '#002921' }

  if (pathname === '/') {
    scrollProgress = { first: 0, second: 0.1 }
    backgroundColorProgress = { first: '#F4F4EE00', second: '#F4F4EE90' }
    textColorProgress = { first: '#F4F4EE', second: '#002921' }
  }

  const backgroundColor = useTransform(
    scrollYProgress,
    [scrollProgress.first, scrollProgress.second],
    [backgroundColorProgress.first, backgroundColorProgress.second]
  )
  const textColor = useTransform(
    scrollYProgress,
    [scrollProgress.first, scrollProgress.second],
    [textColorProgress.first, textColorProgress.second]
  )

  const loadFeatures = () => import('./framerFeatures').then((res) => res.default)

  return (
    <LazyMotion features={loadFeatures}>
      <m.header
        style={{ backgroundColor, color: textColor }}
        className={`header w-full font-serif font-bold bg-background leading-none fixed top-0 left-0  z-50`}>
        <Container className='h-16 flex rounded-3xl justify-center leading-none items-center  z-[90]'>
          <div className='flex justify-center items-center gap-6 mr-auto'>
            <Link href={'/'} className=''>
              <p className='text-3xl font-bold mr-4'>ryo.</p>
            </Link>
            <Link href={'/'} className='relative mb-[-4px] h-fit'>
              <p className='text-lg leading-none'>home</p>
              {pathname === '/' && (
                <m.span
                  layoutId='navlink'
                  className='h-[2px] bg-primary rounded-full absolute left-0 top-full w-full mt-1'></m.span>
              )}
            </Link>
            <Link href={'/shop'} className='relative mb-[-4px] h-fit'>
              <p className='text-lg leading-none'>shop</p>
              {pathname === '/shop' && (
                <m.span
                  layoutId='navlink'
                  className='h-[2px] bg-primary rounded-full absolute left-0 top-full w-full mt-1'></m.span>
              )}
            </Link>
            <Link href={'/search'} className='relative mb-[-4px] h-fit'>
              <p className='text-lg leading-none'>search</p>
              {pathname === '/search' && (
                <m.span
                  layoutId='navlink'
                  className='h-[2px] bg-primary rounded-full absolute left-0 top-full w-full mt-1'></m.span>
              )}
            </Link>
            {!isLoggedIn && (
              <Link href={'/login'} className='relative mb-[-4px] h-fit'>
                <p className='text-lg leading-none'>login</p>
                {pathname === '/login' && (
                  <m.span
                    layoutId='navlink'
                    className='h-[2px] bg-primary rounded-full absolute left-0 top-full w-full mt-1'></m.span>
                )}
              </Link>
            )}
          </div>

          <div className='flex gap-2 justify-center items-center'>
            {isLoggedIn && (
              <div className='relative overflow-hidden rounded-full h-7 w-7'>
                <Image
                  src={photoUrl ? `${photoUrl}` : emptyProfile}
                  alt={'your avatar'}
                  width={24}
                  height={24}
                  className='w-full h-full object-cover'
                />
              </div>
            )}
            <div className='relative'>
              <button className=' w-12 h-12 flex justify-center items-center'>
                <span className='sr-only'>Cart</span>
                <Icon.ShoppingCart size={20} />
              </button>
              <div className='flex justify-center items-center absolute top-[3px] right-0 rounded-full bg-primary m-auto text-center p-1 px-[5.5px] leading-none  text-[8px] text-neon'>
                {cartItemNo}
              </div>
            </div>
          </div>
        </Container>
      </m.header>
    </LazyMotion>
  )
}

export default Header
