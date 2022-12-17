'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Mail } from 'react-feather'
import Button from '../components/button'
import { Container } from '../components/container'
import Input from '../components/input'
import Section from '../components/section'
import { useMailChimpForm } from 'use-mailchimp-form'

type NewsletterInput = {
  EMAIL: string
}

const MailChimpForm = () => {
  const url =
    'https://app.us18.list-manage.com/subscribe/post?u=3ad2e80b5f97babeaef25ccfa&amp;id=00a97f1a2e&amp;f_id=00991ee7f0'
  const { loading, error, success, message, handleSubmit } = useMailChimpForm(url)
  const mailchimpSubmit = handleSubmit
  const mailchimpError = error
  return { mailchimpError, mailchimpSubmit, loading, success, message }
}

const Newsletter = () => {
  const { mailchimpError, mailchimpSubmit, loading, success, message } = MailChimpForm()

  const subscribeNewsletter: SubmitHandler<NewsletterInput> = (data) => {
    mailchimpSubmit(data)
    resetField('EMAIL')
  }
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<NewsletterInput>({ criteriaMode: 'all' })

  return (
    <Section>
      <Container>
        <div className='flex flex-col justify-center items-center text-center'>
          <div>
            <p className='text-3xl md:text-4xl font-bold'>Sign up to our newsletter</p>
            <p className='text-lg mt-3 max-w-[40ch]'>
              Get delicious recipes, discounts and monthly updates delivered straight to your inbox
            </p>

            <form
              onSubmit={handleSubmit(subscribeNewsletter)}
              className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
              <>
                <div className='input-wrapper w-full md:col-span-2'>
                  <>
                    <Input
                      type='email'
                      defaultValue=''
                      name='EMAIL'
                      id='mce-EMAIL'
                      required
                      placeholder='Enter your email'
                      className='w-full rounded-full min-h-[56px] border-primary/30'
                      customAttr={{ ...register('EMAIL', { required: 'Please enter your email' }) }}
                    />
                    <div className='icon absolute top-[1.1rem] left-[1rem] mb-1'>
                      <Mail
                        size={20}
                        className={errors.EMAIL || mailchimpError ? 'stroke-rose-600' : 'stroke-primary/80'}
                      />
                    </div>
                    {errors.EMAIL ||
                      (mailchimpError && (
                        <p className='text-rose-600 text-sm mt-2 pl-2 md:pl-0 mb-4 md:mb-0 text-left md:text-center'>
                          {message}
                        </p>
                      ))}
                    {success && (
                      <p className='text-green-600 text-sm mt-2 pl-2 md:pl-0 mb-4 md:mb-0  text-left md:text-center'>
                        Thanks for subscribing to our newsletter
                      </p>
                    )}
                  </>
                </div>

                <Button variant='primary' className='w-full mb-auto' name='subscribe' id='mc-embedded-subscribe'>
                  {loading ? 'LOADING...' : 'SIGN UP'}
                </Button>
              </>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Newsletter
