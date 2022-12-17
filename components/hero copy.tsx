import hero from '/public/HERO.jpg'
import Section from './section'
import { ScrollingText } from './scrollingText'
import ParallaxImage from './parallaxImage'
import { Container } from './container'

export const Hero = () => {
  return (
    <Section full className='h-[95vh] md:h-screen text-background'>
      <section className='relative w-full h-full '>
        <ParallaxImage
          image={hero}
          alt={'teapot, teacups filled with green tea with some loose green tea leaves around them'}
          priority
          className='absolute h-full w-full'
        />
        <section className='relative z-20 w-full min-h-screen  flex flex-col justify-between pt-[64px]'>
          <Container>
            <h1 className='justify-self-center justify-items-center my-auto  pr-6 md:pr-0  text-xl max-w-[37ch]'>
              Taste the Authentic Japanese Green Tea. Experience the highest quality, certified organic Japanese green tea
              directly from the source - from farm to cup.
            </h1>
          </Container>
          <ScrollingText
            wrapperClass='justify-self-end mb-12'
            text='RYOKUCHA 緑茶 TEAS - JAPANESE GREEN TEA - RYOKUCHA 緑茶 TEAS - '
          />
        </section>
      </section>
    </Section>
  )
}
