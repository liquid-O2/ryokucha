'use client'

import { Container } from './container'
import { Teas } from './popularTeasCarousel'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather'
import Card from './productCardCarousel'
import { useCallback, useMemo, useRef, useState } from 'react'

const Carousel = ({ teas }: { teas: Teas[] }) => {
  const cardWidth = 360
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const [carouselPosition, setCarouselPosition] = useState<number>(0)

  const scrollToCard = (card: HTMLDivElement | null, cardIndex: number) => {
    if (!card) return
    card.scrollTo({
      left: cardIndex * cardWidth,
      behavior: 'smooth',
    })
  }

  const scrolledToTheEndOfTheCarousel = useMemo(() => {
    if (!carouselRef) return false
    return (
      carouselRef.current?.scrollWidth! - carouselRef.current?.scrollLeft! - carouselRef.current?.clientWidth! === 0
    )
  }, [])

  const currentCard = useMemo(() => {
    return Math.floor(carouselPosition / cardWidth)
  }, [carouselPosition])

  const scrollToNextCard = useCallback(() => {
    scrollToCard(carouselRef.current, currentCard + 1)
  }, [currentCard])

  const scrollToPreviousCard = useCallback(() => {
    scrollToCard(carouselRef.current, currentCard - 1)
  }, [currentCard])

  return (
    <>
      <Container className='rounded-[3rem]'>
        <div className='flex'>
          <p className='text-4xl font-bold pt-8 mb-10 mr-auto items-center justify-center '>Popular Teas</p>
          <div className='navigate-carousel gap-4 hidden md:flex'>
            <button disabled={currentCard === 0} className='disabled:opacity-30' onClick={() => scrollToPreviousCard()}>
              <span className='sr-only'>Previous</span>
              <ArrowLeftCircle size={32} />
            </button>
            <button
              disabled={scrolledToTheEndOfTheCarousel || currentCard === teas.length - 1}
              className='disabled:opacity-30'
              onClick={() => {
                scrollToNextCard(), console.log(teas.length)
              }}>
              <span className='sr-only'>Next</span>
              <ArrowRightCircle size={32} />
            </button>
          </div>
        </div>
      </Container>
      <div
        ref={carouselRef}
        className='carousel pr-[360px] flex mb-10 gap-4 overflow-x-auto ml-auto snap-x snap-mandatory'
        onScroll={(e) => {
          setCarouselPosition(e.currentTarget.scrollLeft), console.log(currentCard)
        }}>
        {teas.map((teas) => (
          <Card
            key={teas.Id}
            img={teas.Image}
            price={teas.Price}
            title={teas.Name}
            attributes={teas.Attributes}
            id={teas.Id}
          />
        ))}
      </div>
    </>
  )
}

export default Carousel
