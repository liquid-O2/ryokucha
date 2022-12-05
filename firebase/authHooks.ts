import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect } from 'react'

export const useRedirectIfNotLoggedIn = (href: string) => {
  const router = useRouter()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push(`${href}`)
      }
    })
  }, [])
}

export const useChangeStateIfAuthChanges = (setState: Dispatch<SetStateAction<boolean>>) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setState(true)
    } else {
      setState(false)
    }
  })
}
