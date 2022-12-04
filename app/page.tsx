'use client'
import { useState } from 'react'
import { auth } from '../firebase/config'
import { useChangeStateIfAuthChanges, useRedirectIfNotLoggedIn } from '../firebase/authHooks'
import '../styles/globals.css'
import { signOut } from 'firebase/auth'
import Link from 'next/link'

export default function App() {
  //

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  //

  const handleSignOut = () => {
    signOut(auth)
  }

  //

  useChangeStateIfAuthChanges(setIsLoggedIn)
  useRedirectIfNotLoggedIn('/login')

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
              onClick={() => handleSignOut()}>
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
