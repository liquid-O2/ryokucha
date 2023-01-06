import { Mail } from 'react-feather'
import Button from '../components/button'
import { Container } from '../components/container'
import Section from '../components/section'
import SlideUp from '../components/slideUp'

const Newsletter = () => {
  return (
    <Section>
      <Container>
        <div className='flex max-w-[90%] mx-auto flex-col mb-6 md:mb-0 justify-center items-center text-center'>
          <SlideUp>
            <div>
              <p className='text-3xl md:text-4xl font-semibold'>Sign up to our newsletter</p>
              <p className='text-lg mt-3 max-w-[40ch]  opacity-90'>
                Get delicious recipes, discounts and monthly updates delivered straight to your inbox
              </p>
              <form
                action='https://app.us18.list-manage.com/subscribe/post'
                method='POST'
                className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
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
                        className='w-full rounded-full min-h-[56px] border-primary/10  bg-tertiary-light bg-opacity-[0.01] pr-4 pl-11 py-3 border text-primary'
                      />
                      <div className='icon absolute top-[1.1rem] left-[1rem] mb-1'>
                        <Mail size={20} className={'stroke-primary/80  stroke-2'} />
                      </div>
                    </>
                  </div>
                  <Button variant='secondary' className='w-full mb-auto'>
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
