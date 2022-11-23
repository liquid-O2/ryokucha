'use client'
import SignUpForm from './signUpForm'
import SignInForm from './signInForm'
import { useState, useEffect } from 'react'
import { Dispatch, SetStateAction } from 'react'

export type RegisteredUsers = {
  email: string
  password: string
}

export type formProps = {
  isRegister: boolean
  setIsRegister: Dispatch<SetStateAction<boolean>>
  registeredUsers: RegisteredUsers[]
  setRegisteredUsers: Dispatch<SetStateAction<RegisteredUsers[]>>
}

export default function Forms() {
  //

  const [isRegister, setIsRegister] = useState<boolean>(false)
  const [registeredUsers, setRegisteredUsers] = useState<RegisteredUsers[]>([
    { email: 'admin@root.com', password: 'admin123' },
  ])

  //

  useEffect(() => {
    const storedUsers = localStorage.getItem('storedUsers')
    if (storedUsers) {
      const storedRegisteredUsers = JSON.parse(storedUsers)
      storedRegisteredUsers.map(({ email, password }: RegisteredUsers) => {
        registeredUsers.map((registeredUsers) => {
          if (registeredUsers.email === email && registeredUsers.password === password) return
          else {
            setRegisteredUsers(() => {
              return [...storedRegisteredUsers]
            })
          }
        })
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //

  useEffect(() => {
    const storedUsers = JSON.stringify(registeredUsers)
    if (storedUsers) localStorage.setItem('storedUsers', storedUsers)
  }, [registeredUsers])

  //

  return (
    <>
      {isRegister ? (
        <SignUpForm
          setIsRegister={setIsRegister}
          isRegister={isRegister}
          registeredUsers={registeredUsers}
          setRegisteredUsers={setRegisteredUsers}
        />
      ) : (
        <SignInForm
          setIsRegister={setIsRegister}
          isRegister={isRegister}
          registeredUsers={registeredUsers}
          setRegisteredUsers={setRegisteredUsers}
        />
      )}
    </>
  )
}
