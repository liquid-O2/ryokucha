import '/styles/globals.css'
import AuthForm from '../../components/authForm'
import Section from '../../components/section'
import { Container } from '../../components/container'
import PageWrapper from '../../components/pageWrapper'

export default function Login() {
  return (
    <>
      <PageWrapper>
        <Section>
          <Container>
            <main className='flex items-center justify-center '>
              <AuthForm />
            </main>
          </Container>
        </Section>
      </PageWrapper>
    </>
  )
}
