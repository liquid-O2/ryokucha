import '../styles/globals.css'
import Image from 'next/image'
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

export default function App() {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Section className='relative z-30 mt-[-2.5rem]'>
          <Container>
            <SlideUp>
              <article className='flex flex-col justify-center items-center px-6 leading-normal'>
                <h2 className='max-w-[73ch] text-xl md:text-2xl text-center'>{`Japanese green teas are a healthy dose of rich flavour, elegant aroma and pure umami. It's delight in every sip. It's that needed energy boost in the morning. It's a refreshing sensation of light rain during a hot summer day. It's unlocked creativity, and hours of laser focus. It's what your mind wants, and your body needs. It's nothing but good vibes, delivered straight to your door.`}</h2>
                <Link href={'/shop'} className='mt-12  '>
                  <Button variant='secondary'>BROWSE OUR COLLECTION</Button>
                </Link>
              </article>
            </SlideUp>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
              <div className='w-full row-start-2 md:row-start-1  overflow-hidden aspect-w-1 md:aspect-w-2 md:aspect-h-1 aspect-h-1 rounded-3xl md:rounded-[3rem]  md:h-[38rem]'>
                <Image
                  src={col}
                  placeholder='blur'
                  fill
                  sizes='(min-width:768px) 50vw 100vw'
                  alt={'a teapot and a teacup filled with green tea'}
                  className=' object-cover'
                />
              </div>
              <article className='flex justify-center  md:ml-10 flex-col'>
                <SlideUp>
                  <h3 className='text-3xl min-[2000px]:text-4xl font-bold max-w-[20ch] leading-tight mb-4 min-[2000px]:mb-6'>
                    The best green tea from the best farmers in Japan
                  </h3>
                  <p className='text-lg min-[2000px]:text-xl  min-[2000px]:pr-10 max-w-[50ch] pr-4  opacity-90'>
                    We source our tea directly from Japan. We work with the best farmers to bring you a premium product.
                    We believe in sustainable farming practices, and our tea is grown without pesticides or herbicides. We
                    produce some of the best tea in the world.
                  </p>
                  <aside className='flex text-sm md:text-base min-[2000px]:text-lg gap-2 md:gap-3 mb-2  mt-5 min-[2000px]:mt-8 flex-wrap'>
                    <p className='px-2 md:px-3 py-1 rounded-full border border-primary/30'>Organic</p>
                    <p className='px-2 md:px-3 py-1 rounded-full border border-primary/30'>Locally-sourced</p>
                    <p className='px-2 md:px-3 py-1 rounded-full border border-primary/30'>Premium quality</p>
                  </aside>
                </SlideUp>
              </article>
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
              <article className='flex justify-center  flex-col'>
                <SlideUp>
                  <h3 className='text-3xl min-[2000px]:text-4xl pr-6 md:pr-0 font-bold max-w-[20ch] leading-tight mb-4 min-[2000px]:mb-6'>
                    Natural superfood, perfect for your body and mind
                  </h3>
                  <p className='text-lg min-[2000px]:text-xl max-w-[50ch] pr-4 opacity-90'>
                    The remarkable properties and health benefits of Japanese Green teas are the result of unique
                    harvesting, processing and blending techniques of tea leaves perfected over centuries by Japanese tea
                    masters.
                  </p>
                  <aside className='flex text-sm md:text-base min-[2000px]:text-lg gap-2 md:gap-3 mt-5 mb-2  flex-wrap min-[2000px]:mt-8'>
                    <p className='px-2 md:px-3 py-1 rounded-full border border-primary/30'>3-5 hours of energy</p>
                    <p className='px-2 md:px-3 py-1 rounded-full border border-primary/30'>No jitters</p>
                    <p className='px-2 md:px-3 py-1 rounded-full border border-primary/30'>Nutrient-rich</p>
                  </aside>
                </SlideUp>
              </article>
              <div className='w-full relative overflow-hidden aspect-w-1 aspect-h-1  md:aspect-w-2 md:aspect-h-1 rounded-3xl md:rounded-[3rem] md:h-[38rem]'>
                <Image
                  src={col2}
                  fill
                  placeholder='blur'
                  sizes='(min-width:768px) 50vw 100vw'
                  alt={'a teapot and a teacup filled with green tea'}
                  className='object-cover '
                />
              </div>
            </div>
          </Container>
        </Section>
        <Newsletter />
      </PageWrapper>
      <Modal />
    </>
  )
}
