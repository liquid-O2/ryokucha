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
      <div className=' border-t border-primary/10  grid  grid-cols-2 md:grid-cols-4 gap-2 pt-8 '>
        <div className='  col-span-2 h-full mb-6'>
          <div className='flex md:flex-col justify-between'>
            <div className='text mb-auto'>
              <p className='text-xl md:text-2xl'>緑茶</p>
              <p className='font-bold tracking-tighter text-2xl md:text-3xl mt-1 md:mt-3'>Ryokucha</p>
            </div>
            <button className='flex w-12 justify-center rounded-full items-center p-2 mt-8 shadow-lg shadow-primary/40 bg-primary text-background'>
              <Link href={'#hero'}>
                <ChevronUp />
              </Link>
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-2 text-lg md:text-xl leading-none mb-6'>
          <Link href={'/shop'}>shop</Link> <button className=' w-fit'>{`cart (0)`}</button>
          {isLoggedIn ? (
            <button className=' w-fit' onClick={() => signOut(auth)}>
              logout
            </button>
          ) : (
            <Link href={'/login'}>login</Link>
          )}
        </div>
        <div className='flex flex-col gap-2 text-lg md:text-xl leading-none'>
          <p>privacy policy</p> <p>terms and conditions</p> <p>careers</p>
        </div>
        <div className='border-t border-primary/10 col-span-2 md:col-span-4 flex justify-between py-4'>
          <p className='text-primary/60'>©Designed & Developed By Arunava</p> <p className='text-primary/60'>№</p>
        </div>
      </div>
    </Container>
  )
}

export default Footer
