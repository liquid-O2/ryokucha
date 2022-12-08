'use client'
import { useEffect, useState } from 'react'
import { auth } from '../firebase/config'
import { changeStateIfAuthChanges } from '../firebase/authHandlers'
import '../styles/globals.css'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Hero from '../components/Hero'
import ScrollingText from '../components/ScrollingText'
import PopularTeas from '../components/PopularTeas'

export default function App() {
  //
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

  //

  // const handleSignOut = () => {
  //   signOut(auth)
  // }

  //

  // useEffect(() => {
  //   if (!isLoggedIn) router.push('/login')
  // }, [router, isLoggedIn])

  // changeStateIfAuthChanges(setIsLoggedIn)

  //

  return (
    <>
      <Hero />
      <ScrollingText />
      <PopularTeas />
    </>
  )
}
