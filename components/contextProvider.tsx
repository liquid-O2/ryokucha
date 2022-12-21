'use client'
import {
  browserPopupRedirectResolver,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'

import { auth, db, provider } from '../firebase/config'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import handleErrors from '../firebase/errorHandler'
import { UseFormResetField, UseFormSetError } from 'react-hook-form'
import { Inputs } from './authForm'
import { useRouter } from 'next/navigation'
import { arrayRemove, arrayUnion, doc, getDoc, onSnapshot, setDoc, Unsubscribe, updateDoc } from 'firebase/firestore'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

type GlobalContext = {
  signIn: (
    email: string,
    password: string,
    setError: UseFormSetError<Inputs>,
    resetField: UseFormResetField<Inputs>
  ) => void
  signUp: (
    email: string,
    password: string,
    setError: UseFormSetError<Inputs>,
    resetField: UseFormResetField<Inputs>,
    setIsRegister: Dispatch<SetStateAction<boolean>>
  ) => void
  isLoggedIn: boolean
  userDetails: UserDetails
  router: AppRouterInstance

  updateUser: (type: 'add' | 'delete', data: string, field: string) => void
  signUpWithGoogle: () => void
  cartItemNo: number
  setCartItemNo: Dispatch<SetStateAction<number>>
  logout: () => void
}

export type Teas = {
  name: string
  id: string
  attributes: Array<string>
  image: string
  price: string
  featured?: boolean
  fullImage?: string
  description?: string
}

type UserDetails = {
  uid: string | null
  likedTeas: Array<string>
  photoUrl?: string | null
  email: string | null
}

export const GlobalContext = React.createContext<GlobalContext>(null!)

const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userDetails, setUserDetails] = useState<UserDetails>({ uid: null, likedTeas: [''], email: '' })
  const [cartItemNo, setCartItemNo] = useState(0)

  // user collection related
  useEffect(() => {
    let removeSnapshot: Unsubscribe = () => {}
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = doc(db, 'users', `${user.uid}`)
        const checkIfDocExists = async () => {
          const docs = await getDoc(userRef)
          if (!docs.exists()) {
            setDoc(
              userRef,
              { userID: user.uid, likedTeas: arrayUnion(''), photoUrl: user.photoURL, email: user.email },
              { merge: true }
            )
          }
        }
        removeSnapshot = onSnapshot(userRef, { includeMetadataChanges: true }, (data) => {
          const userInfo = data.data()
          setUserDetails((prevInfo) => ({
            ...prevInfo,
            ...userInfo,
            uid: user.uid,
            photoUrl: user.photoURL,
            email: user.email,
          }))
        })
        checkIfDocExists()
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      return () => {
        removeSnapshot()
      }
    })
  }, [])

  const userRef = doc(db, 'users', `${userDetails.uid}`)
  const updateUser = (type: 'add' | 'delete', data: string, field: string) => {
    if (type === 'add') {
      return updateDoc(userRef, { [field]: arrayUnion(data) })
    }
    return updateDoc(userRef, { [field]: arrayRemove(data) })
  }

  // firebase auth helpers
  const signIn = (
    email: string,
    password: string,
    setError: UseFormSetError<Inputs>,
    resetField: UseFormResetField<Inputs>
  ) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push('/')
        resetField('email')
        resetField('password')
      })
      .catch((error) => {
        handleErrors(error.message, setError)
      })
  }

  const signUp = (
    email: string,
    password: string,
    setError: UseFormSetError<Inputs>,
    resetField: UseFormResetField<Inputs>,
    setIsRegister: Dispatch<SetStateAction<boolean>>
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsRegister(false)
        router.push('/')
        resetField('email')
        resetField('password')
      })
      .catch((error) => {
        handleErrors(error.message, setError)
      })
  }

  const logout = () => {
    signOut(auth)
  }

  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider, browserPopupRedirectResolver)
  }

  // values to be passed to context
  const globalContext = {
    signIn,
    signUp,
    isLoggedIn,
    userDetails,
    router,

    updateUser,
    signUpWithGoogle,
    cartItemNo,
    setCartItemNo,
    logout,
  }

  return <GlobalContext.Provider value={globalContext}>{children}</GlobalContext.Provider>
}

export default ContextProviders
