import hero from '/public/hero.png'
import Section from '../components/section'
import Image from 'next/image'
import { Container } from '../components/container'
import SlideUp from '../components/slideUp'

export const Hero = () => {
  return (
    <Section full className='h-[99vh] text-background md:h-[99vh]'>
      <section className='relative h-full w-full '>
        <Image
          src={hero}
          fill
          placeholder={'blur'}
          sizes='(min-width: 100px) 70vw'
          alt={' a chawan(tea bowl) on top of a a wooden table with a hand holding a chasen(bamboo whisk) over it'}
          quality={100}
          className='relative h-full w-full object-cover'
          priority={true}
        />

        <section className='relative z-30 flex h-full  w-full flex-col '>
          <Container className='mt-auto flex h-full flex-col justify-end self-end'>
            <SlideUp delay={0.5}>
              <div className='mb-24 md:mb-32'>
                <aside className='mt-5 mb-5 flex flex-wrap gap-1 text-sm opacity-80 md:gap-3 md:text-base min-[2000px]:mt-8 min-[2000px]:text-lg'>
                  <p className='rounded-full border border-background/60 px-2 py-1 md:px-3'>3-5 hours of energy</p>
                  <p className='rounded-full border border-background/60 px-2 py-1 md:px-3'>Organic</p>
                </aside>
                <h1 className=' max-w-[21ch] text-4xl font-light leading-[1.1] md:pr-1  md:text-5xl lg:text-7xl '>
                  Enjoy the <span className='font-light italic'>finest</span> Japanese green teas and cherish the
                  <span className='font-light italic '> extraordinary </span>
                  flavour
                </h1>
              </div>
            </SlideUp>
          </Container>
        </section>
      </section>
    </Section>
  )
}
