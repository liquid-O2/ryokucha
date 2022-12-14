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

  const scrolledToTheEndOfTheCarousel: boolean =
    carouselRef.current?.scrollWidth! - carouselRef.current?.scrollLeft! - carouselRef.current?.clientWidth! <= 0

  const scrollToCard = (card: HTMLDivElement | null, cardIndex: number) => {
    if (!card) return
    card.scrollTo({
      left: cardIndex * cardWidth,
      behavior: 'smooth',
    })
  }

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

  return (
    <>
      <div className=' px-6 md:px-12'>
        <div className='flex'>
          <p className='text-4xl font-bold  mb-10 mr-auto items-center justify-center '>
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
      </div>
      <div
        ref={carouselRef}
        className='carousel  last:pr-[24px] flex pb-10 overflow-y-hidden gap-4 overflow-x-auto  snap-x snap-mandatory'
        onScroll={(e) => setCarouselPosition(e.currentTarget.scrollLeft)}>
        {teas.map((teas) => {
          const { id, image, price, name, attributes } = teas
          return (
            <Card
              key={id}
              img={image}
              price={price}
              title={name}
              attributes={attributes}
              id={id}
              className={
                'first:w-[324px] first:[&_figure]:min-w-[300px] first:min-[768px]:w-[412px]  first:[&_figure]:min-[768px]:min-w-[360px]  first:min-[2482px]:w-[324px] first:[&_figure]:min-[2482px]:min-w-[360px] last:w-[340px] last:[&_figure]:min-w-[300px] min-w-[300px] md:w-auto md:min-w-[360px] h-[501px] last:md:w-[400px] last:[&_figure]:md:min-w-[360px]  slide-center flex-shrink-0 relative first:pl-6 first:md:pl-12 first:min-[2484px]:pl-0  last:pr-10'
              }
            />
          )
        })}
      </div>
    </>
  )
}

export default Carousel

//first:max-[766px]:w-[384px] first:max-[2482px]:w-[412px] first:[&_figure]:max-[2482px]:min-w-[360px]
//first:min-[768px]:w-[384px] first:max-[2482px]:w-[412px] first:[&_figure]:max-[2482px]:min-w-[360px]
