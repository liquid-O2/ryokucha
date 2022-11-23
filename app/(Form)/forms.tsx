'use client'

import SignUpForm from './SignUp/signupForm'
import LoginForm from './Login/loginForm'
import { useState, useEffect } from 'react'

export type RegisteredUsers = {
  email: string
  password: string
}

export default function Forms() {
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const [registeredUsers, setRegisteredUsers] = useState<RegisteredUsers[]>([
    { email: 'admin@root.com', password: 'admin123' },
  ])
  const changeForm = (): void => {
    setIsRegister((prevState) => !prevState)
  }

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

  useEffect(() => {
    const storedUsers = JSON.stringify(registeredUsers)
    if (storedUsers) localStorage.setItem('storedUsers', storedUsers)
  }, [registeredUsers])

  return (
    <>
      {isRegister ? (
        <SignUpForm
          changeForm={changeForm}
          isRegister={isRegister}
          registeredUsers={registeredUsers}
          setRegisteredUsers={setRegisteredUsers}
        />
      ) : (
        <LoginForm
          changeForm={changeForm}
          isRegister={isRegister}
          registeredUsers={registeredUsers}
          setRegisteredUsers={setRegisteredUsers}
        />
      )}
    </>
  )
}
