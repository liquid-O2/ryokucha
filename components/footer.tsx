'use client'
import Link from 'next/link'
import { Container } from './container'
import { ChevronUp } from 'react-feather'
import { useContext } from 'react'
import { GlobalContext } from './contextProvider'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'

const Footer = () => {
  const { isLoggedIn } = useContext(GlobalContext)
  return (
    <Container>
      <footer className=' grid grid-cols-2  gap-2 border-t border-primary/10 pt-8 md:grid-cols-4 '>
        <section className='col-span-2 h-full pb-7 md:pb-12'>
          <aside className='flex items-center justify-between md:flex-col md:items-start'>
            <p className='mt-1 text-2xl font-semibold leading-none tracking-tighter md:text-3xl'>ryo.</p>
            <button
              onClick={() => window.scrollTo(0, 0)}
              className='flex w-10 items-center justify-center rounded-full bg-primary p-2 text-background shadow-lg shadow-primary/40 md:mt-9'>
              <span className='sr-only'>scroll to the top of the page</span>
              <ChevronUp />
            </button>
          </aside>
        </section>
        <nav className='mb-12 flex flex-col gap-3 text-lg leading-none md:items-end  '>
          <Link className={'transition-opacity duration-200 ease-in hover:opacity-50'} href={'/'}>
            home
          </Link>
          <Link className={'transition-opacity duration-200 ease-in hover:opacity-50'} href={'/shop'}>
            shop
          </Link>
          {isLoggedIn ? (
            <button
              className=' w-fit transition-opacity duration-200 ease-in hover:opacity-50'
              onClick={() => signOut(auth)}>
              logout
            </button>
          ) : (
            <Link className={'transition-opacity duration-200 ease-in hover:opacity-50'} href={'/login'}>
              login
            </Link>
          )}
        </nav>
        <nav className='flex flex-col items-end gap-3 text-lg leading-none '>
          <p className={'transition-opacity duration-200 ease-in hover:cursor-pointer hover:opacity-50'}>
            privacy policy
          </p>
          <p className={'transition-opacity duration-200 ease-in hover:cursor-pointer hover:opacity-50'}>careers</p>
          <p
            className={'w-full text-right transition-opacity duration-200 ease-in hover:cursor-pointer hover:opacity-50'}>
            t&c
          </p>
        </nav>
        <aside className='col-span-2  flex justify-between border-t border-primary/10 py-4 text-sm md:col-span-4'>
          <p className='text-primary transition-all'>
            © Designed & Developed By
            <span className='transition-all hover:cursor-pointer hover:underline hover:underline-offset-4'>
              {` Arunava`}
            </span>
          </p>
          <p className='text-primary'>№</p>
        </aside>
      </footer>
    </Container>
  )
}

export default Footer
