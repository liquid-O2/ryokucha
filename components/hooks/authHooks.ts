import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'

export const useRedirectIfNotLoggedIn = (href: string) => {
  const router = useRouter()
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push(`${href}`)
    }
  })
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
