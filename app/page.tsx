import '../styles/globals.css'
import Button from '../components/button'
import { Container } from '../components/container'
import { Hero } from './hero'
import Section from '../components/section'
import col from '../public/landing-page-1.png'
import col2 from '../public/landing-page-2.png'
import Newsletter from './newsletter'
import Link from 'next/link'
import PageWrapper from '../components/pageWrapper'
import SlideUp from '../components/slideUp'
import Modal from '../components/modal'
import InfoSection from './infoSection'

export default function App() {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Section className='relative z-30 mt-[-2.5rem]'>
          <Container>
            <SlideUp>
              <article className='flex flex-col items-center justify-center px-6 leading-normal'>
                <h2 className='max-w-[73ch] text-center text-xl md:text-2xl'>{`Japanese green teas are a healthy dose of rich flavour, elegant aroma and pure umami. It's delight in every sip. It's that needed energy boost in the morning. It's a refreshing sensation of light rain during a hot summer day. It's unlocked creativity, and hours of laser focus. It's what your mind wants, and your body needs. It's nothing but good vibes, delivered straight to your door.`}</h2>
                <Link href={'/shop'} className='mt-12  '>
                  <Button variant='secondary'>BROWSE OUR COLLECTION</Button>
                </Link>
              </article>
            </SlideUp>
          </Container>
        </Section>
        <InfoSection
          image={col}
          imagePosition='left'
          heading='The best green tea from the best farmers in Japan'
          paragraph='We source our tea directly from Japan. We work with the best farmers to bring you a premium product. We believe in sustainable farming practices, and our tea is grown without pesticides or herbicides. We produce some of the best tea in the world.'
          pillText={{
            first: 'Organic',
            second: 'Locally-sourced',
            third: 'Premium quality',
          }}
        />
        <InfoSection
          image={col2}
          imagePosition='right'
          heading='Natural superfood, perfect for your body and mind'
          paragraph='The remarkable properties and health benefits of Japanese Green teas are the result of unique
          harvesting, processing and blending techniques of tea leaves perfected over centuries by Japanese tea
          masters.'
          pillText={{
            first: '3-5 hours of energy',
            second: 'No jitters',
            third: 'Nutrient-rich',
          }}
        />
        <Newsletter />
      </PageWrapper>
      <Modal />
    </>
  )
}
