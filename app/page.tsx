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
        {/* @ts-ignore */}
        <PopularTeas />
        <Button />
      </Container>
      <DisplayInfo />
    </>
  )
}
