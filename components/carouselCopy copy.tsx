'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles

import { Teas } from './popularTeasCarousel'

import Card from './productCardCopy'

const Carousel = ({ teas }: { teas: Teas[] | undefined }) => {
  return (
    <>
      <Swiper height={501} slidesPerView={'auto'}>
        {teas!.map((teas) => {
          const { id, image, price, name, attributes } = teas
          return (
            <SwiperSlide key={id} className='w-[300px] md:w-[360px] mr-6 '>
              <Card img={image} price={price} title={name} attributes={attributes} id={id} className={'w-full'} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Carousel
