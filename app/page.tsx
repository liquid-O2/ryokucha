import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../components/container'
import { FavouriteTeas } from '../components/favouriteTeas'
import { Hero } from '../components/hero'
import { PopularTeas } from '../components/popularTeasCarousel'
import { ScrollingText } from '../components/scrollingText'
import col1 from '../public/col1.jpg'
import col2 from '../public/col2.jpg'
import col3 from '../public/col3.jpg'
import '../styles/globals.css'

export default function App() {
  return (
    <>
      <Hero />
      <ScrollingText />
      <Container>
        <div className='py-16 rounded-3xl md:rounded-[3rem] bg-primary text-background mb-24 md:mb-32 flex flex-col'>
          {/* @ts-ignore */}
          <FavouriteTeas />
          {/* @ts-ignore */}
          <PopularTeas />
          <button className=' self-center flex justify-center items-center text-center mt-12 px-8 py-4 bg-neon text-primary rounded-full'>
            <Link href={'/shop'} className=' font-bold text-lg'>
              BROWSE MORE TEAS
            </Link>
          </button>
        </div>
      </Container>
      <Container>
        <div className='grid grid-cols-[1] grid-flow-row  min-[880px]:grid-cols-3 third-section gap-y-4  gap-x-6 min-[880px]:gap-y-10 mb-24 md:mb-32'>
          <div className='  flex w-[75%] min-[880px]:w-auto md:items-end'>
            <p className='font-bold text-3xl '>
              The best green tea from the
              <br className='hidden min-[1328px]:block' />
              {` best farmers in Japan`}
            </p>
          </div>
          <div className=' min-[880px]:col-span-2 flex justify-end items-end'>
            <p className=' text-xl char flex justify-end min-[880px]:pl-[10rem]  mb-6 min-[880px]:mb-0'>
              Ryokucha sources the highest quality green teas from Japan and delivers them directly to you.
              <br className='hidden min-[1664px]:block' /> Our teas are organically farmed and provide a true taste of
              Japan.
            </p>
          </div>
          <div className=' h-[400px] min-[880px]:h-[500px] '>
            <Image
              className='w-full h-full object-cover rounded-3xl md:rounded-[3rem]'
              src={col1}
              alt={'a small teacup with green tea'}
            />
          </div>
          <div className=' h-[400px] min-[880px]:h-[500px] '>
            <Image
              className='w-full h-full object-cover rounded-3xl md:rounded-[3rem]'
              src={col2}
              alt={'a small porcelain dish with loose green tea leaves and some small cups with green tea in it'}
            />
          </div>
          <div className=' h-[400px] min-[880px]:h-[500px] '>
            <Image
              className='w-full h-full object-cover rounded-3xl md:rounded-[3rem]'
              src={col3}
              alt={'a small dish with some water and some green leaves on top'}
            />
          </div>
        </div>
      </Container>
    </>
  )
}
