import hero from '/public/hero.png'
import Section from '../components/section'
import Image from 'next/image'
import { Container } from '../components/container'

export const Hero = () => {
  return (
    <Section full className='h-[99vh] md:h-[99vh] text-background'>
      <section className='relative w-full h-full '>
        <Image
          src={hero}
          fill
          placeholder='blur'
          sizes='100vw'
          alt={' a chawan(tea bowl) on top of a a wooden table with a hand holding a chasen(bamboo whisk) over it'}
          priority
          quality={100}
          className='object-cover h-full w-full'
        />
        <section className='relative z-20 w-full h-full  flex flex-col '>
          <Container className='self-end flex flex-col justify-end mt-auto h-full'>
            <div className='mb-24 md:mb-32'>
              <aside className='flex text-sm md:text-base min-[2000px]:text-lg gap-2 md:gap-3 mt-5 mb-4 text-opacity-60 flex-wrap min-[2000px]:mt-8'>
                <p className='px-2 md:px-3 py-1 rounded-full border border-background/60'>3-5 hours of energy</p>
                <p className='px-2 md:px-3 py-1 rounded-full border border-background/60'>No jitters</p>
                <p className='px-2 md:px-3 py-1 rounded-full border border-background/60'>Nutrient-rich</p>
              </aside>
              <h1 className=' md:pr-1 text-4xl md:text-5xl lg:text-7xl  leading-none max-w-[21ch] '>
                Enjoy the Finest Japanese Green Teas and cherish the extraordinary flavour
              </h1>
            </div>
          </Container>
        </section>
      </section>
    </Section>
  )
}
