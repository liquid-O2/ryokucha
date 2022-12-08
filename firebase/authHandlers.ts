import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './config'
import { Dispatch, SetStateAction } from 'react'
import handleErrors from './errorHandler'
import { UseFormResetField, UseFormSetError } from 'react-hook-form'
import { Inputs } from '../components/authForm'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

export const changeStateIfAuthChanges = (setState: Dispatch<SetStateAction<boolean>>) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setState(true)
    } else {
      setState(false)
    }
  })
}

export const signIn = async (
  email: string,
  password: string,
  setError: UseFormSetError<Inputs>,
  router: AppRouterInstance,
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

export const signUp = async (
  email: string,
  password: string,
  setError: UseFormSetError<Inputs>,
  router: AppRouterInstance,
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
