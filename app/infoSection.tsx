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
          <div className='grid grid-cols-1 gap-14 md:grid-cols-2'>
            <div
              className={`${
                imagePosition === 'right' ? 'md:col-start-2 md:col-end-3' : 'md:col-start-1 md:col-end-2'
              }w-full aspect-w-1 aspect-h-1  row-start-2 overflow-hidden rounded-3xl md:aspect-w-2 md:aspect-h-1 md:row-start-1 md:h-[38rem]  md:rounded-[3rem]`}
            >
              <Image
                src={image}
                placeholder='blur'
                fill
                sizes='(min-width: 100px) 30vw'
                alt={'a teapot and a teacup filled with green tea'}
                className=' object-cover'
              />
            </div>
            <article
              className={`flex justify-center overflow-hidden ${imagePosition === 'left' ? ' md:ml-10' : ''} flex-col`}
            >
              <SlideUp delay={0.2}>
                <h3
                  className={`text-3xl md:text-4xl ${
                    imagePosition === 'right' ? 'pr-6  md:pr-0' : 'pr-12 md:pr-0'
                  } mb-4 max-w-[20ch] font-semibold leading-tight min-[2000px]:mb-6`}
                >
                  {heading}
                </h3>
                <p
                  className={`text-lg min-[2000px]:text-xl  ${
                    imagePosition === 'right' ? 'min-[2000px]:pr-10' : ''
                  }  max-w-[50ch] pr-4  `}
                >
                  {paragraph}
                </p>
                <aside className='mb-2 mt-5 flex flex-wrap gap-2 text-sm md:gap-3  md:text-base min-[2000px]:mt-8 min-[2000px]:text-lg'>
                  <p className='rounded-full border border-primary/30 px-2 py-1 md:px-3'>{pillText.first}</p>
                  <p className='rounded-full border border-primary/30 px-2 py-1 md:px-3'>{pillText.second}</p>
                  <p className='rounded-full border border-primary/30 px-2 py-1 md:px-3'>{pillText.third}</p>
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
