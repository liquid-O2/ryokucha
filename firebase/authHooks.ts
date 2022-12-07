import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config'
import { Dispatch, SetStateAction } from 'react'

export const changeStateIfAuthChanges = (setState: Dispatch<SetStateAction<boolean>>) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setState(true)
    } else {
      setState(false)
    }
  })
}
