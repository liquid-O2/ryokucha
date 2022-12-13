'use client'

import { Container } from './container'
import { Teas } from './popularTeasCarousel'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather'
import Card from './productCard'
import { useCallback, useMemo, useRef, useState } from 'react'

const Carousel = ({ teas, favourite }: { teas: Teas[]; favourite?: boolean }) => {
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

  const scrolledToTheEndOfTheCarousel: boolean =
    carouselRef.current?.scrollWidth! - carouselRef.current?.scrollLeft! - carouselRef.current?.clientWidth! <= 0

  const currentCard = useMemo(() => {
    return Math.floor(carouselPosition / cardWidth)
  }, [carouselPosition])

  const scrollToNextCard = useCallback(() => {
    console.log(currentCard)
    scrollToCard(carouselRef.current, currentCard + 1)
  }, [currentCard])

  const scrollToPreviousCard = useCallback(() => {
    console.log(currentCard)
    scrollToCard(carouselRef.current, currentCard - 1)
  }, [currentCard])
  console.log(carouselPosition)
  return (
    <>
      <Container className='rounded-[3rem]'>
        <div className='flex'>
          <p className='text-4xl font-bold pt-8 mb-10 mr-auto items-center justify-center '>
            {favourite ? 'Favourite Teas' : 'Popular Teas'}
          </p>
          <div className={`navigate-carousel gap-4 hidden md:flex `}>
            <button disabled={currentCard === 0} className='disabled:opacity-30' onClick={() => scrollToPreviousCard()}>
              <span className='sr-only'>Previous</span>
              <ArrowLeftCircle size={32} />
            </button>
            <button
              disabled={scrolledToTheEndOfTheCarousel || currentCard == teas.length - 1}
              className='disabled:opacity-30'
              onClick={() => scrollToNextCard()}>
              <span className='sr-only'>Next</span>
              <ArrowRightCircle size={32} />
            </button>
          </div>
        </div>
      </Container>
      <div
        ref={carouselRef}
        className='carousel last:pr-[24px] flex pb-10 gap-4 overflow-x-auto ml-auto snap-x snap-mandatory'
        onScroll={(e) => setCarouselPosition(e.currentTarget.scrollLeft)}>
        {teas.map((teas) => (
          <Card
            key={teas.id}
            img={teas.image}
            price={teas.price}
            title={teas.name}
            attributes={teas.attributes}
            id={teas.id}
            className={
              'min-w-[360px] h-[501px]  slide-center flex-shrink-0 relative first:pl-6 first:md:pl-12 min-[1833px]:first:pl-0 last:pr-8'
            }
          />
        ))}
      </div>
    </>
  )
}

export default Carousel
