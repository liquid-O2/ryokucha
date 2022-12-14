'use client'
import Link from 'next/link'
import { Container } from './container'
import { ChevronUp } from 'react-feather'
import { useContext } from 'react'
import { AuthContext } from './contextProvider'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'

const Footer = () => {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <Container>
      <div className=' border-t border-primary/10  grid grid-cols-2 md:grid-cols-4 gap-2 pt-8 '>
        <div className='  col-span-2 h-full pb-6 md:pb-12'>
          <div className='flex md:flex-col items-center md:items-start justify-between'>
            <div className='text flex flex-col justify-end '>
              <p className='text-xl md:text-2xl'>緑茶</p>
              <p className='font-bold tracking-tighter leading-none text-2xl md:text-3xl mt-1'>Ryokucha</p>
            </div>
            <button className='flex w-10 justify-center rounded-full items-center p-2 md:mt-8 shadow-lg shadow-primary/40 bg-primary text-background'>
              <Link href={'#hero'}>
                <ChevronUp />
              </Link>
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-2 text-lg md:text-xl leading-none mb-8 '>
          <Link className={'hover:opacity-50 transition-opacity duration-200 ease-in'} href={'/shop'}>
            shop
          </Link>
          <button className=' w-fit hover:opacity-50 transition-opacity duration-200 ease-in'>{`cart (0)`}</button>
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
        </div>
        <div className='flex flex-col gap-2 text-lg md:text-xl leading-none'>
          <p className={'hover:opacity-50 transition-opacity duration-200 ease-in hover:cursor-pointer'}>
            privacy policy
          </p>
          <p className={'hover:opacity-50 transition-opacity duration-200 ease-in hover:cursor-pointer'}>
            terms and conditions
          </p>
          <p className={'hover:opacity-50 transition-opacity duration-200 ease-in hover:cursor-pointer'}>careers</p>
        </div>
        <div className='border-t border-primary/10 col-span-2 md:col-span-4 flex justify-between py-4'>
          <p className='text-primary/60 text-base'>
            © Designed & Developed By
            <span className='hover:underline hover:underline-offset-4 hover:cursor-pointer'> Arunava</span>
          </p>
          <p className='text-primary/60'>№</p>
        </div>
      </div>
    </Container>
  )
}

export default Footer
