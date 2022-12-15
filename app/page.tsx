import Button from '../components/button'
import { Container } from '../components/container'
import DisplayInfo from '../components/displayInfo'
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
        <div className='py-16 rounded-3xl md:rounded-[3rem] bg-primary text-background mb-24 md:mb-32 flex flex-col'>
          {/* @ts-ignore */}
          <FavouriteTeas />
          {/* @ts-ignore */}
          <PopularTeas />
          <Button />
        </div>
      </Container>
      <DisplayInfo />
    </>
  )
}
