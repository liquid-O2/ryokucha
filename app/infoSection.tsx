import SlideUp from '../components/slideUp'
import Section from '../components/section'
import { Container } from '../components/container'
import Image, { StaticImageData } from 'next/image'

type InfoSection = {
  image: StaticImageData
  imagePosition: 'left' | 'right'
  heading: string
  paragraph: string
  pillText: { first: string; second: string; third: string }
}

export const InfoSection = ({ image, imagePosition, heading, paragraph, pillText }: InfoSection) => {
  return (
    <>
      <Section>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
            <div
              className={`${
                imagePosition === 'right' ? 'md:col-start-2 md:col-end-3' : 'md:col-start-1 md:col-end-2'
              }w-full row-start-2 md:row-start-1  overflow-hidden aspect-w-1 md:aspect-w-2 md:aspect-h-1 aspect-h-1 rounded-3xl md:rounded-[3rem]  md:h-[38rem]`}>
              <Image
                src={image}
                placeholder='blur'
                fill
                sizes='(min-width: 100px) 30vw'
                alt={'a teapot and a teacup filled with green tea'}
                className=' object-cover'
              />
            </div>
            <article className={`flex justify-center ${imagePosition === 'left' ? ' md:ml-10' : ''} flex-col`}>
              <SlideUp delay={0.2}>
                <h3
                  className={`text-3xl min-[2000px]:text-4xl ${
                    imagePosition === 'right' ? 'pr-6 md:pr-0' : ''
                  } font-semibold max-w-[20ch] leading-tight mb-4 min-[2000px]:mb-6`}>
                  {heading}
                </h3>
                <p
                  className={`text-lg min-[2000px]:text-xl  ${
                    imagePosition === 'right' ? 'min-[2000px]:pr-10' : ''
                  }  max-w-[50ch] pr-4  opacity-90`}>
                  {paragraph}
                </p>
                <aside className='flex text-sm md:text-base min-[2000px]:text-lg gap-2 md:gap-3 mb-2  mt-5 min-[2000px]:mt-8 flex-wrap'>
                  <p className='px-2 md:px-3 py-1 rounded-full border border-primary/30'>{pillText.first}</p>
                  <p className='px-2 md:px-3 py-1 rounded-full border border-primary/30'>{pillText.second}</p>
                  <p className='px-2 md:px-3 py-1 rounded-full border border-primary/30'>{pillText.third}</p>
                </aside>
              </SlideUp>
            </article>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default InfoSection
