'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { auth } from '../firebase/config'
import { useChangeStateIfAuthChanges, useRedirectIfNotLoggedIn } from '../components/hooks/authHooks'
import '../styles/globals.css'
import { signOut } from 'firebase/auth'

export default function App() {
  //

  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  //

  const handleSignOut = () => {
    signOut(auth)
    router.push('/login')
  }

  //
  useChangeStateIfAuthChanges(setIsLoggedIn)
  useRedirectIfNotLoggedIn('/login')

  //

  return (
    <>
      {isLoggedIn ? (
        <div className='wrapper flex flex-col justify-center items-center h-screen w-screen text-neutral-200 '>
          <h1 className='font-sans text-4xl font-bold'>Welcome Home</h1>
          <button
            className='bg-neutral-200 px-4 py-4 text-lg rounded-lg text-neutral-900 shadow-lg shadow-neutral-200/20 font-bold logout mt-6 hover:bg-neutral-300'
            onClick={() => handleSignOut()}>
            Log Out
          </button>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </>
  )
}
