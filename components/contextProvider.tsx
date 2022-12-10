'use client'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase/config'
import React, { Dispatch, SetStateAction, useState } from 'react'
import handleErrors from '../firebase/errorHandler'
import { UseFormResetField, UseFormSetError } from 'react-hook-form'
import { Inputs } from './authForm'
import { useRouter } from 'next/navigation'
import { stringify } from 'querystring'
import { doc, setDoc } from 'firebase/firestore'

type AuthContext = {
  signIn: (
    email: string,
    password: string,
    setError: UseFormSetError<Inputs>,
    resetField: UseFormResetField<Inputs>
  ) => Promise<void>
  signUp: (
    email: string,
    password: string,
    setError: UseFormSetError<Inputs>,
    resetField: UseFormResetField<Inputs>,
    setIsRegister: Dispatch<SetStateAction<boolean>>
  ) => Promise<void>
  isLoggedIn: boolean
  userDetails: any
}

export const AuthContext = React.createContext<AuthContext>(null!)

const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userDetails, setUserDetails] = useState({})

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userRef = doc(db, 'users', `${user.uid}`)
      setDoc(userRef, { userID: user.uid, likedTeas: [] }, { merge: true })
      setIsLoggedIn(true)
      setUserDetails(user)
      console.log(user)
    } else {
      setIsLoggedIn(false)
    }
  })

  const signIn = async (
    email: string,
    password: string,
    setError: UseFormSetError<Inputs>,
    resetField: UseFormResetField<Inputs>
  ) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push('/')
        resetField('email')
        resetField('password')
      })
      .catch((error) => {
        handleErrors(error.message, setError)
      })
  }

  const signUp = async (
    email: string,
    password: string,
    setError: UseFormSetError<Inputs>,
    resetField: UseFormResetField<Inputs>,
    setIsRegister: Dispatch<SetStateAction<boolean>>
  ) => {
    await createUserWithEmailAndPassword(auth, email, password)
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

  const authContext = {
    signIn,
    signUp,
    isLoggedIn,
    userDetails,
  }

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
}

export default ContextProviders
