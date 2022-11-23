'use client'

import SignUpForm from './SignUp/signUpForm'
import LoginForm from './SignIn/signInForm'
import { useState, useEffect } from 'react'

export type RegisteredUsers = {
  email: string
  password: string
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
        <LoginForm
          setIsRegister={setIsRegister}
          isRegister={isRegister}
          registeredUsers={registeredUsers}
          setRegisteredUsers={setRegisteredUsers}
        />
      )}
    </>
  )
}
