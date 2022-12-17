import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/button'
import { Container } from '../components/container'
import { Hero } from '../components/hero copy'
import Section from '../components/section'
import col from '../public/COL.png'
import '../styles/globals.css'
import Carousel from '../components/carouselFramer'
import Featured from './featured'
import Newsletter from './newsletter'

export default function App() {
  return (
    <>
      <Hero />
      <Section className='relative z-30 mt-[-2.5rem]'>
        <Container>
          <article className='flex flex-col justify-center items-center px-6 leading-normal'>
            <h2 className='max-w-[73ch] text-xl md:text-2xl text-center'>{`Japanese green teas are a healthy dose of rich flavour, elegant aroma and pure umami. It's delight in every sip. It's that needed energy boost in the morning. It's a refreshing sensation of light rain during a hot summer day. It's unlocked creativity, and hours of laser focus. It's what your mind wants, and your body needs. It's nothing but good vibes, delivered straight to your door.`}</h2>
            <Button variant='secondary' className='mt-12'>
              BROWSE OUR COLLECTION
            </Button>
          </article>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
            <article className='flex justify-center  flex-col'>
              <h3 className='text-3xl font-bold max-w-[20ch] leading-tight mb-4'>
                Natural superfood, perfect for your body and mind
              </h3>
              <p className='text-lg max-w-[50ch] pr-6'>
                The remarkable properties and health benefits of Japanese Green teas are the result of unique harvesting,
                processing and blending techniques of tea leaves perfected over centuries by Japanese tea masters. This
                gives the unique green tea high content of vitamins, minerals and especially antioxidants, which can have
                a positive effect on concentration, mood, and metabolism.
              </p>
              <aside className='flex gap-3 mt-5 flex-wrap'>
                <p className='px-3 py-1 rounded-full border border-primary/70'>3-5 hours of energy</p>
                <p className='px-3 py-1 rounded-full border border-primary/70'>No jitters</p>
                <p className='px-3 py-1 rounded-full border border-primary/70'>Nutrient-rich</p>
              </aside>
            </article>
            <div className='min-h-full'>
              <Image
                src={col}
                alt={'a teapot and a teacup filled with green tea'}
                className='h-full w-full object-cover rounded-3xl md:rounded-[3rem] max-h-[601px]'
              />
            </div>
          </div>
        </Container>
      </Section>
      <Featured />
      <Newsletter />
    </>
  )
}
