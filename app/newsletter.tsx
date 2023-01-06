import { Mail } from 'react-feather'
import Button from '../components/button'
import { Container } from '../components/container'
import Section from '../components/section'
import SlideUp from '../components/slideUp'

const Newsletter = () => {
  return (
    <Section>
      <Container>
        <div className='mx-auto mb-6 flex max-w-[90%] flex-col items-center justify-center text-center md:mb-0'>
          <SlideUp>
            <div>
              <p className='text-3xl font-semibold md:text-4xl'>Sign up to our newsletter</p>
              <p className='mt-3 max-w-[40ch] text-lg  opacity-90'>
                Get delicious recipes, discounts and monthly updates delivered straight to your inbox
              </p>
              <form
                action='https://app.us18.list-manage.com/subscribe/post'
                method='POST'
                className='mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-3'
              >
                <input type='hidden' name='u' value='3ad2e80b5f97babeaef25ccfa' />
                <input type='hidden' name='id' value='00a97f1a2e' />
                <>
                  <div id='mergeRow-0' className='input-wrapper w-full md:col-span-2'>
                    <>
                      <input
                        type='email'
                        name='MERGE0'
                        id='MERGE0'
                        autoCorrect='off'
                        autoComplete='off'
                        autoCapitalize='off'
                        required
                        placeholder='Enter your email'
                        className='min-h-[56px] w-full rounded-full border  border-primary/10 bg-tertiary-light bg-opacity-[0.01] py-3 pr-4 pl-11 text-primary'
                      />
                      <div className='icon absolute top-[1.1rem] left-[1rem] mb-1'>
                        <Mail size={20} className={'stroke-primary/80  stroke-2'} />
                      </div>
                    </>
                  </div>
                  <Button variant='secondary' className='mb-auto w-full'>
                    {'SIGN UP'}
                  </Button>
                  <input type='hidden' name='ht' value='69825c556c7e7dfb59219f465435ea56eb03b3b1:MTY3MTQ1NjA1MC4wMjg0' />
                  <input type='hidden' name='mc_signupsource' value='hosted' />
                </>
              </form>
            </div>
          </SlideUp>
        </div>
      </Container>
    </Section>
  )
}

export default Newsletter
