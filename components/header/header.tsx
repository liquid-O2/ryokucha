'use client'

import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import Link from 'next/link'
import { Container } from '../container'
import { GlobalContext } from '../contextProvider'
import HamburgerMenu from './hamburger'
import Profile from './profile'
import emptyProfile from '../../public/emptyProfile.png'
import Cart from './cart'

const links = [
  { href: '/', label: 'home' },
  { href: '/shop', label: 'shop' },
]

const Header = () => {
  const { isLoggedIn, cartItemNo, userDetails, dispatch, cartDetails, logout } = useContext(GlobalContext)
  const { photoUrl, email } = userDetails
  const path = usePathname()

  return (
    <header className={` w-full  font-bold leading-none fixed top-0 left-0 z-50 mt-4 md:mt-6`}>
      <Container className='h-16 flex rounded-3xl justify-center leading-none items-center'>
        <Link
          href={'/'}
          className='mr-auto rounded-full bg-background  flex justify-center shadow-md  shadow-primary-dark/10 items-center px-6 py-4 text-center max-h-[56px] '>
          <p className=' text-xl md:text-2xl leading-none font-bold'>ryo.</p>
        </Link>
        <div
          className={`flex gap-2 justify-center items-center py-4 ${
            isLoggedIn ? 'px-6' : 'pl-5 pr-6'
          } md:px-6 rounded-full shadow-md  shadow-primary-dark/10 bg-background  max-h-[56px]`}>
          <nav className='hidden md:block'>
            <ul className={`flex justify-center items-center gap-4 ${isLoggedIn ? 'mr-4' : 'mr-2'}`}>
              {links.map((link) => {
                return (
                  <li key={link.href}>
                    <Link className='relative hover:opacity-50 transition-opacity duration-200 ease-in' href={link.href}>
                      <div className='absolute left-0 top-full overflow-hidden block h-[1px] w-full'>
                        {link.href === path && (
                          <span className=' block h-[2px] w-full rounded-full pt-[2px]  bg-primary' />
                        )}
                      </div>
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              {!isLoggedIn && (
                <li>
                  <Link className='relative hover:opacity-50 transition-opacity duration-200 ease-in' href={'/login'}>
                    <div className='absolute left-0 top-full overflow-hidden block h-[1px] w-full'>
                      {'/login' === path && (
                        <span className=' block h-[2px] w-full mx-auto rounded-full pt-[2px]  bg-primary' />
                      )}
                    </div>
                    login
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          {isLoggedIn && <Profile photoUrl={photoUrl} emptyProfile={emptyProfile} email={email} logout={logout} />}
          <Cart cartItemNo={cartItemNo} dispatch={dispatch} cartDetails={cartDetails} />
          <HamburgerMenu isLoggedIn={isLoggedIn} />
        </div>
      </Container>
    </header>
  )
}

export default Header
