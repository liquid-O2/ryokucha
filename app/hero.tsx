import Section from '../components/section'

import { Container } from '../components/container'
import SlideUp from '../components/slideUp'
import Balancer from 'react-wrap-balancer'

export const Hero = () => {
  return (
    <Section full className='h-[100svh] text-background md:h-[100dvh] '>
      <div className='absolute z-[15] bg-primary-dark/30 w-screen h-screen'></div>
      <video autoPlay loop muted className='absolute z-10'>
        <source src={'/hero.mp4'} type='video/mp4' />
      </video>
      <section className='pointer-events-none relative h-full w-full'>
        <section className='relative z-30 flex h-full  w-full flex-col '>
          <Container className='mt-auto flex h-full flex-col justify-end self-end font-light'>
            <SlideUp delay={0.4}>
              <article className='mb-24 md:mb-32'>
                <aside className='mt-5 mb-5 flex flex-wrap gap-1 text-sm opacity-80 md:gap-3 md:text-base min-[2000px]:mt-8 min-[2000px]:text-lg'>
                  <p className='rounded-full border border-background/60 px-2 py-1 md:px-3'>3-5 hours of energy</p>
                  <p className='rounded-full border border-background/60 px-2 py-1 md:px-3'>Organic</p>
                </aside>
                <Balancer>
                  <h1 className=' max-w-[21ch] text-4xl font-light leading-[1.1] opacity-90  md:pr-1 md:text-5xl  lg:text-6xl  '>
                    Enjoy the <span className='font-light italic '>finest</span> Japanese green teas and cherish the
                    <span className='font-light italic '> extraordinary </span>
                    flavour
                  </h1>
                </Balancer>
              </article>
            </SlideUp>
          </Container>
        </section>
      </section>
    </Section>
  )
}
