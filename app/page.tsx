'use client'
import { useEffect, useState } from 'react'
import { auth } from '../firebase/config'
import { changeStateIfAuthChanges } from '../firebase/authChangeHook'
import '../styles/globals.css'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function App() {
  //
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

  //

  const handleSignOut = () => {
    signOut(auth)
  }

  //

  useEffect(() => {
    if (!isLoggedIn) router.push('/login')
  }, [router, isLoggedIn])

  changeStateIfAuthChanges(setIsLoggedIn)

  //

  return (
    <>
      <div className='wrapper flex flex-col justify-center items-center h-screen w-screen text-neutral-200 '>
        {isLoggedIn ? (
          <>
            <h1 className='font-sans text-4xl font-bold'>Welcome Home</h1>
            <Link href='/todos'>
              <button className='bg-transparent px-4 py-4 text-lg rounded-lg text-neutral-200 border-2 border-neutral-200 font-bold logout mt-6 hover:bg-neutral-300 hover:text-neutral-900'>
                Go to todos
              </button>
            </Link>
            <button
              className='bg-neutral-200 px-4 py-4 text-lg rounded-lg text-neutral-900 shadow-lg shadow-neutral-200/20 font-bold logout mt-6 hover:bg-neutral-300'
              onClick={handleSignOut}>
              Log Out
            </button>
          </>
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </>
  )
}
