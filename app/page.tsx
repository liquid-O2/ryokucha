'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import '../styles/globals.css'

export default function App() {
  const router = useRouter()
  useEffect(() => {
    const localState = localStorage.getItem('loggedIn')
    if (!localState) return
    const { loggedIn } = JSON.parse(localState)
    if (loggedIn) {
      return
    } else {
      router.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='wrapper flex flex-col justify-center items-center h-screen w-screen text-neutral-200 '>
      <h1 className='font-sans text-4xl font-bold'>Welcome Home</h1>
      <button className='bg-neutral-200 px-4 py-4 text-lg rounded-lg text-neutral-900 shadow-lg shadow-neutral-200/20 font-bold logout mt-6'>
        Log Out
      </button>
    </div>
  )
}
