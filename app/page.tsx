import Link from 'next/link'
import { Container } from '../components/container'
import { FavouriteTeas } from '../components/favouriteTeas'
import { Hero } from '../components/hero'
import { PopularTeas } from '../components/popularTeasCarousel'
import { ScrollingText } from '../components/scrollingText'
import '../styles/globals.css'

export default function App() {
  return (
    <>
      <Hero />
      <ScrollingText />
      <Container>
        <div className='py-16 rounded-3xl md:rounded-[48px] bg-green-1000 text-green-50 mb-24 flex flex-col'>
          {/* @ts-ignore */}
          <FavouriteTeas />
          {/* @ts-ignore */}
          <PopularTeas />
          <button className=' self-center flex justify-center items-center text-center mt-12 px-8 py-4 bg-neon text-green-1000 rounded-full'>
            <Link href={'/shop'} className=' font-bold text-lg'>
              BROWSE MORE TEAS
            </Link>
          </button>
        </div>
      </Container>
    </>
  )
}
