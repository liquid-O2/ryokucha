'use client'
import Link from 'next/link'
import { Container } from './container'
import { ChevronUp } from 'react-feather'
import { useContext } from 'react'
import { GlobalContext } from './contextProvider'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'

const Footer = () => {
  const { isLoggedIn, cartItemNo } = useContext(GlobalContext)
  return (
    <Container>
      <section className=' border-t border-primary/10  grid grid-cols-2 md:grid-cols-4 gap-2 pt-8 '>
        <section className='col-span-2 h-full pb-6 md:pb-12'>
          <div className='flex md:flex-col items-center md:items-start justify-between'>
            <div className='text flex flex-col justify-end '>
              <p className='text-xl md:text-2xl'>緑茶</p>
              <p className='font-bold tracking-tighter leading-none text-2xl md:text-3xl mt-1'>Ryokucha</p>
            </div>
            <button
              onClick={() => window.scrollTo(0, 0)}
              className='flex w-10 justify-center rounded-full items-center p-2 md:mt-8 shadow-lg shadow-primary/40 bg-primary text-background'>
              <span className='sr-only'>scroll to the top of the page</span>
              <ChevronUp />
            </button>
          </div>
        </section>
        <section className='flex md:items-end flex-col gap-3 text-lg md:text-xl leading-none mb-12 '>
          <Link className={'hover:opacity-50 transition-opacity duration-200 ease-in'} href={'/'}>
            home
          </Link>
          <Link className={'hover:opacity-50 transition-opacity duration-200 ease-in'} href={'/shop'}>
            shop
          </Link>
          {isLoggedIn ? (
            <button
              className=' w-fit hover:opacity-50 transition-opacity duration-200 ease-in'
              onClick={() => signOut(auth)}>
              logout
            </button>
          ) : (
            <Link className={'hover:opacity-50 transition-opacity duration-200 ease-in'} href={'/login'}>
              login
            </Link>
          )}
        </section>
        <section className='flex items-end flex-col gap-3 text-lg md:text-xl leading-none'>
          <p className={'hover:opacity-50 transition-opacity duration-200 ease-in hover:cursor-pointer'}>
            privacy policy
          </p>
          <p className={'hover:opacity-50 transition-opacity duration-200 ease-in hover:cursor-pointer'}>careers</p>
          <p
            className={'hover:opacity-50 transition-opacity duration-200 ease-in hover:cursor-pointer w-full text-right'}>
            t&c
          </p>
        </section>
        <section className='border-t border-primary/10 col-span-2 md:col-span-4 flex justify-between py-4'>
          <p className='text-primary/70 text-base transition-all'>
            © Designed & Developed By
            <span className='hover:underline hover:underline-offset-4 hover:cursor-pointer transition-all'>
              {` Arunava`}
            </span>
          </p>
          <p className='text-primary/70'>№</p>
        </section>
      </section>
    </Container>
  )
}

export default Footer
