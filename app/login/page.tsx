import '/styles/globals.css'
import loginImage from '/public/Login.webp'
import Image from 'next/image'
import AuthForm from '../../components/authForm'
import Section from '../../components/section'
import { Container } from '../../components/container'

export default function Login() {
  return (
    <>
      <Section>
        <Container>
          <div className='flex justify-center items-center'>
            <AuthForm />
          </div>
        </Container>
      </Section>
    </>
  )
}
