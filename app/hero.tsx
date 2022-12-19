import hero from '/public/Hero-2.png'
import Section from '../components/section'
import { ScrollingText } from '../components/scrollingText'
import ParallaxImage from '../components/parallaxImage'
import { Container } from '../components/container'

export const Hero = () => {
  return (
    <Section full className='h-[95vh] md:h-[95vh] text-background'>
      <section className='relative w-full h-full '>
        <ParallaxImage
          image={hero}
          alt={'teapot, teacups filled with green tea with some loose green tea leaves around them'}
          priority
          className='absolute h-full w-full'
        />
        <section className='relative z-20 w-full h-full  flex flex-col justify-between pt-[64px]'>
          <Container>
            <h1 className=' font-normal relative justify-self-center justify-items-center my-auto mb-[-2rem] pr-6 md:pr-0  text-2xl max-w-[37ch]'>
              Taste the most authentic Japanese Green Tea. Experience the highest quality, certified organic Japanese
              green tea directly from the source - from farm to cup.
            </h1>
          </Container>
          <ScrollingText
            wrapperClass='relative justify-self-end mb-6 pl-10'
            textClass='text-[7.5rem] mb-4 md:mb-0 md:text-[10rem]'
            text='RYOKUCHA 緑茶 TEAS - JAPANESE GREEN TEA - RYOKUCHA 緑茶 TEAS - '
          />
        </section>
      </section>
    </Section>
  )
}
