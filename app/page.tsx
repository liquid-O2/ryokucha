import { Hero } from '../components/hero'
import { PopularTeas } from '../components/popularTeasCarousel'
import { ScrollingText } from '../components/scrollingText'
import '../styles/globals.css'

export default function App() {
  return (
    <>
      <Hero />
      <ScrollingText />
      {/* @ts-ignore */}
      <PopularTeas />
    </>
  )
}
