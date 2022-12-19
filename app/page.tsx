import '../styles/globals.css'
import Image from 'next/image'
import Button from '../components/button'
import { Container } from '../components/container'
import { Hero } from './hero'
import Section from '../components/section'
import col from '../public/COL.png'
import col2 from '../public/col2.png'
import Newsletter from './newsletter'

export default function App() {
  return (
    <>
      <Hero />
      <Section className='relative z-30 mt-[-2.5rem]'>
        <Container>
          <article className='flex flex-col justify-center items-center px-6 leading-normal'>
            <h2 className='max-w-[73ch] text-xl md:text-2xl text-center'>{`Japanese green teas are a healthy dose of rich flavour, elegant aroma and pure umami. It's delight in every sip. It's that needed energy boost in the morning. It's a refreshing sensation of light rain during a hot summer day. It's unlocked creativity, and hours of laser focus. It's what your mind wants, and your body needs. It's nothing but good vibes, delivered straight to your door.`}</h2>
            <Button variant='secondary' className='mt-12  '>
              BROWSE OUR COLLECTION
            </Button>
          </article>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
            <div className='min-h-full row-start-2 md:row-start-1'>
              <Image
                src={col2}
                alt={'a teapot and a teacup filled with green tea'}
                className='h-full w-full object-cover rounded-3xl md:rounded-[3rem] max-h-[601px]'
              />
            </div>
            <article className='flex justify-center  md:ml-10 flex-col'>
              <h3 className='text-3xl min-[2000px]:text-4xl font-bold max-w-[20ch] leading-tight mb-4 min-[2000px]:mb-6'>
                The best green tea from the best farmers in Japan
              </h3>
              <p className='text-lg min-[2000px]:text-xl  min-[2000px]:pr-10 max-w-[50ch] pr-4'>
                We source our tea directly from Japan. We work with the best farmers to bring you a premium product. We
                believe in sustainable farming practices, and our tea is grown without pesticides or herbicides. We
                produce some of the best tea in the world.
              </p>
              <aside className='flex min-[2000px]:text-lg gap-3 mt-5 min-[2000px]:mt-8 flex-wrap'>
                <p className='px-3 py-1 rounded-full border border-primary/70'>Organic</p>
                <p className='px-3 py-1 rounded-full border border-primary/70'>Locally-sourced</p>
                <p className='px-3 py-1 rounded-full border border-primary/70'>Premium quality</p>
              </aside>
            </article>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
            <article className='flex justify-center  flex-col'>
              <h3 className='text-3xl min-[2000px]:text-4xl pr-6 md:pr-0 font-bold max-w-[20ch] leading-tight mb-4 min-[2000px]:mb-6'>
                Natural superfood, perfect for your body and mind
              </h3>
              <p className='text-lg min-[2000px]:text-xl max-w-[50ch] pr-4 '>
                The remarkable properties and health benefits of Japanese Green teas are the result of unique harvesting,
                processing and blending techniques of tea leaves perfected over centuries by Japanese tea masters.
              </p>
              <aside className='flex min-[2000px]:text-lg gap-3 mt-5  flex-wrap min-[2000px]:mt-8'>
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
      <Newsletter />
    </>
  )
}
